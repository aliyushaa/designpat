export default function Home(){
  return(
    <div>
      <h1> Registration form </h1>
      <form action="/api/sign" method="post">
        <label>
          EMail
        </label>
        <input type='email' name='email' placeholder='Type your email'></input>
        <label>
          Password
        </label>
        <input type='password' name='password' placeholder='Type your password'></input>
        <input type='submit' value='Sign up'></input>

      </form>

      <h1>Login</h1>
            <form action="/api/login" method="post">
              <label>
                EMail
              </label>
              <input type='email' name='email' placeholder='Type your email'></input>
              <label>
                Password
              </label>
              <input type='password' name='password' placeholder='Type your password'></input>
              <input type='submit' value='Sign in'></input>

            </form>
      </div>

  )
}