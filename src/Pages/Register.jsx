import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";



const Register = () => {
  useEffect(() => {
    document.title = "The Royal Garden - Register";
  }, []);

  const { createUser, UserUpdate, LogOut } = useContext(AuthContext);
  const loginNavigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    console.log(email, password);
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain 1 capital letter ");
      return;
    } else if (!specialChars.test(password)) {
      toast.error("Password must contain 1 spacial  character ");
      return;
    } else {
      createUser(email, password)
        .then((result) => {
          console.log(result);
          toast.success("SuccessFully registered");
          UserUpdate(name, photo)
            .then((result) => {
              console.log(result);
              loginNavigate("/login");
            })
            .catch((error) => {
            });
          LogOut()
            .then((result) => {})
            .catch((error) => {});
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  };
  return (
    <>
      <div className="flex flex-col my-20 md:flex-row items-center justify-center container mx-auto">
        <div className="   justify-end">
          <section className=" dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center w-[500px] py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-wider font-custom text-[#201F5E] md:text-2xl dark:text-white">
                    Create your own account
                  </h1>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 md:space-y-6"
                    action="#"
                  >
                    <div>
                      <label className="block mb-2 text-sm font-medium  dark:text-white">
                        Your User Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className=" focus:text-[#201F5E] focus:outline-[#201F5E] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name"
                        required=""
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium  dark:text-white">
                        Your Photo-Url
                      </label>
                      <input
                        type="text"
                        name="photo"
                        id="photo"
                        className=" focus:text-[#201F5E] focus:outline-[#201F5E] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="url"
                        required=""
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium  dark:text-white">
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className=" focus:text-[#201F5E] focus:outline-[#201F5E] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required=""
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium  dark:text-white">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className=" focus:text-[#201F5E] focus:outline-[#201F5E] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className=" form-checkbox  text-[#201F5E] w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            required=""
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label className="text-gray-500 dark:text-gray-300">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-sm font-medium text-gray-400 hover:underline dark:text-primary-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div className="flex justify-center items-center ">
                      <input
                        className="px-6 w-full py-2 rounded-lg font-thin active:bg-[#201F5E]/80 bg-[#201F5E] text-white font-title "
                        type="submit"
                        value="Submit"
                      />
                    </div>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account ?{" "}
                      <Link
                        to="/login"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Sign In
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Register;
