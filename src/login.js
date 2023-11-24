import { useNavigate } from "react-router-dom"; 

const Login = () => {

  const navigate = useNavigate(); 

    return (
      <div>
          <div className="container max-w-sm mx-auto bg-gray-200">
          <h1 className="max-w-sm mx-auto text-3xl text-white font-bold mb=5">
            Scholar Sprint
          </h1>
          <form>
            <label class="block">
              <input type="text" value="Email" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              "/>
            </label>
          </form>
          <form>
            <label class="block">
              <input type="text" value="Password"/>
            </label>
          </form>
      <button class="bg-violet hover:bg-sky-700" onClick={() => {navigate("/search")}}>
            LOGIN 
      </button>
        </div>
      </div>
      
    );
  }
  
  export default Login;
  