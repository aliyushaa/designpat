export default function Home(){
  return(
    <div>
      <h1 className="text-3xl font-bold underline">
           Registration form
          </h1>
      <form action="/api/sign" method="post">
        <label>
          Email
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
  <div class="bg-grey-lighter min-h-screen flex flex-col">
              <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                  <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                      <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                       <form action="/api/sign" method="post">

                      <input
                          type="text"
                          class="block border border-grey-light w-full p-3 rounded mb-4"
                          name="email"
                          placeholder="Email" />

                      <input
                          type="password"
                          class="block border border-grey-light w-full p-3 rounded mb-4"
                          name="password"
                          placeholder="Password" />
                      <input
                          type="password"
                          class="block border border-grey-light w-full p-3 rounded mb-4"
                          name="confirm_password"
                          placeholder="Confirm Password" />

                      <button
                          type="submit"
                          class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                      >Create Account</button>
                      </form>
                  </div>

                  <div class="text-grey-dark mt-6">
                      Already have an account?
                      <a class="no-underline border-b border-blue text-blue" href="../pages/login">
                          Log in
                      </a>.
                  </div>
              </div>
          </div>
                      </div>
            )

}