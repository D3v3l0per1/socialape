let db = {
  users: [
    {
      userId: 'bz2bruzb4f3bfki3fdfsgge34',
      email: 'user@gmail.com',
      handle: 'user',
      createdAt: '2019-07-30T20:39:32.073Z',
      imageUrl: 'image/usbdibfksdf',
      bio: 'Hello, my name is usr, nice to meet u',
      website: 'https://user.com',
      location: 'London, UK'
    }
  ],
  screams: [
    {
      userHandle: 'user',
      body: 'this is ur mom',
      createdAt: '2019-07-30T20:39:32.073Z',
      likeCount: 5,
      commentCount: 2
    }
  ],
  comments: [
    {
      userHandle: 'user',
      screamId: 'i43bfil4wbfwli4bg34',
      body: 'nice one tho',
      createdAt: '2019-07-30T20:39:32.073Z'
    }
  ],
  notifications: [
    {
      recipient: 'user',
      sender: 'john',
      read: 'true | false',
      screamId: 'i43bfil4wbfwli4bg34',
      type: 'like | comment',
      createdAt: '2019-07-30T20:39:32.073Z'
    }
  ]
}