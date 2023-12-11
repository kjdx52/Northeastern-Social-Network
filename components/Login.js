import Image from "next/image";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

/**
 * Login component providing user authentication options.
 * It includes options to sign in with a Northeastern account or as a guest using Google.
 */
const Login = () => {
    return (

        <div className="flex flex-col items-center mx-auto space-y-[15px]">
            {/* Logo of Northeastern University */}
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Northeastern_seal.svg/1200px-Northeastern_seal.svg.png"
                height={240}
                width={240}
                alt="Northeastern University"
            />

            {/* Sign-in button for Northeastern Account */}
            <a
                style={{
                    width: 460,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                onClick={() => signIn("azure-ad")}
                className="px-20 py-5 z-10 text-xl cursor-pointer -mt-16 bg-red-300 rounded-md text-white"
            >
                Sign in with Northeastern Account
            </a>

            {/* Sign-in button for Google (Guest) */}
            <a
                style={{
                    width: 460,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                onClick={() => signIn("google")}
                className="px-20 py-5 z-10 text-xl cursor-pointer -mt-16 bg-red-300 rounded-md text-white"
            >
                <div style={{ display: "flex", alignItems: "center" }}>
                    <FcGoogle className="mx-2" />
                    Guest? Sign in with Google
                </div>
            </a>
        </div>
    );
};

export default Login;
