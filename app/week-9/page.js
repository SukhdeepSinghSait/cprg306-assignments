"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const login = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error(error);
        };
    };

    const logout = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error(error);
        };
    };
    const accesssShoppingList = () => {
        window.location.href = "/week-9/shopping-list";
    }
    
    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <h1 className="h-4 text-4xl font-bold mb-8">Shopping List App</h1>
            <div className="flex flex-col items-center justify-center mt-4">
                {user ? (
                    <div className="flex flex-col justify-center items-center w-max">
                        <p className="text-lg">Welcome, {user.displayName}</p>
                        <button
                            className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            onClick={accesssShoppingList}
                        >
                            Continue to your Shopping List
                        </button>
                        <button
                            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={logout}
                        >
                            Sign Out
                        </button>
                        
                    </div>
                ) : (
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={login}
                    >
                        Sign In with GitHub
                    </button>
                )}
            </div>
        </main>
    );
}