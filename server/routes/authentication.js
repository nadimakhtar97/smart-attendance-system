app.post('/api/login', async (req, res) => {

    const { username, password } = req.body
  
    const user = await User.findOne({ username })
    console.log(user);
  
    if (!user) {
      return res.json({ status: 'error', error: 'Invalid username/password' })
    }
  
    if (await bcrypt.compare(password, user.password)) {
  
      const token = jwt.sign({
        id: user._id, username: user.username
      }, JWT_SECRET)
  
      return res.json({ status: 'ok', data: token })
    }
  
  
    return res.json({ status: 'error', error: 'Invalid username/password' });
  
  })
  
  app.post('/api/register', async (req, res) => {
  
    //Hashing the password
  
    const { username, password: plainTextPassowrd } = req.body;
  
    if (!username || typeof username !== 'string') {
  
      return res.json({ status: 'error', error: 'Invalid username' })
  
    }
  
    if (!plainTextPassowrd || typeof plainTextPassowrd !== 'string') {
  
      return res.json({ status: 'error', error: 'Invalid password' })
  
    }
  
    if (plainTextPassowrd.length < 5) {
      return res.json({ status: 'error', error: 'password too small. Atleast should be character' })
    }
  
    console.log(plainTextPassowrd);
    const password = await bcrypt.hash(plainTextPassowrd, 10);
    console.log(await bcrypt.hash(password, 10));
  
    try {
  
      const response = await User.create({
        username,
        password
      })
      console.log('User created successfully', response);
    }
    catch (error) {
  
      if (error.code === 11000) {
        return res.json({ status: 'error', error: 'User name already in use' })
      }
      throw error
    }
  
    res.json({ status: "ok" })
  })