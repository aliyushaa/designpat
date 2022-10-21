export default function Home(){
  return(
      <div>
        <h1> Registraion </h1>
        <form action="/api/sign" method="post">
          <label>
            EMail Address
          </label>
          <input type='email' name='email' placeholder='Type your email'></input>
          <label>
            Pasword
          </label>
          <input type='password' name='password' placeholder='Type your password'></input>
          <input type='submit' value='sign up '></input>

        </form>

        <h1>Login</h1>
        <form action="/api/login" method="post">
          <label>
            EMail Address
          </label>
          <input type='email' name='email' placeholder='Type your email'></input>
          <label>
            Pasword
          </label>
          <input type='password' name='password' placeholder='Type your password'></input>
          <input type='submit' value='Login'></input>

        </form>
      </div>
    )
  }
//   <div>
//   <div class="bg-zinc-400 min-h-screen flex flex-col">
//   <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
//     <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
//
//
//
//
//
//
//     </div>
//
//
//   </div>
//
// </div>
//
//   </div>
//   )
//   }

{/*     <div> */}
{/*     <div class="grid h-screen place-items-center"> */}
{/*     <h1 className="text-3xl font-bold underline">Registration form</h1> */}
{/*       <form action="/api/sign" method="post"> */}
{/*         <label> */}
{/*           Email */}
{/*         </label> */}
{/*         <input type='email' name='email' placeholder='Type your email'></input> */}
{/*         <label> */}
{/*           Password */}
{/*         </label> */}
{/*         <input type='password' name='password' placeholder='Type your password'></input> */}
{/*         <input type='submit' value='Sign up'></input> */}

{/*       </form> */}
{/*     </div> */}
{/*       <h1>Login</h1> */}
{/*             <form action="/api/login" method="post"> */}
{/*               <label> */}
{/*                 EMail */}
{/*               </label> */}
{/*               <input type='email' name='email' placeholder='Type your email'></input> */}
{/*               <label> */}
{/*                 Password */}
{/*               </label> */}
{/*               <input type='password' name='password' placeholder='Type your password'></input> */}
{/*               <input type='submit' value='Sign in'></input> */}

{/*             </form> */}

{/*                             </div> */}
