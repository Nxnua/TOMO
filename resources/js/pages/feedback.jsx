export default function Feedback() {
    return (
        <div className="w-screen h-[100vh] bg-white dark:bg-slate-900 ">
            <div className="absolute mt-52 ml-32 w-80 float-left border p-2 rounded-xl shadow-xl text-xl">
                <form>
                    <p className="text-2xl">Feedback & Queries</p>
                    <div>
                        <label className="text-sm">Select Issue*</label>
                        <br></br>
                        <select
                            className="bg-gray-50 border border-gray-300 dark:bg-slate-400 text-sm rounded-lg 
										focus:border-blue-500 w-full p-2.5"
                        >
                            <option value="Feedback">
                                -- Select Your Query --
                            </option>
                            <option value="Feedback">Feedback</option>
                            <option value="Feedback">
                                Payment Related Issue
                            </option>
                            <option value="Feedback">Advertise With Us</option>
                        </select>
                        <br></br>
                        <label className="text-sm">Email Address*</label>
                        <br></br>
                        <input
                            className="bg-gray-50 border border-gray-300 dark:bg-slate-400
           text-sm rounded-lg
           focus:border-blue-500 w-full p-2.5"
                            type="email"
                            placeholder="sotomofeedback@gmail.com"
                        />
                        <br></br>
                        <label className="text-sm">Username</label>
                        <br></br>
                        <input
                            className="bg-gray-50 border border-gray-300 dark:bg-slate-400
										text-sm rounded-lg focus:border-blue-500 
										w-full p-2.5"
                            type="text"
                            placeholder="Tomo"
                        />
                        <br></br>
                        <label className="text-sm">Drop Your Query</label>
                        <br></br>
                        <textarea
                            className="bg-gray-50 border border-gray-300 dark:bg-slate-400
											text-sm rounded-lg 
											focus:border-blue-500 
											w-full p-2.5 "
                            rows="4"
                            cols="25"
                            maxlength="300"
                            placeholder="Max Allowed Characters: 300"
                        ></textarea>
                        <br></br>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 
										text-white font-bold 
										py-2 px-4 rounded"
                            type="button"
                        >
                            <a href="/feedback"> Submit </a>
                        </button>
                    </div>
                </form>
            </div>

            <div className="absolute mt-40 ml-[70vh] w-[120vh] h-[70vh] border p-2 rounded-xl text-2xl">
                <p>Huree University of ICT</p>
                <a
                    href="https://maps.app.goo.gl/tPUtktMxCQkhkvYv5"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="p-2 h-5/6 mt-8 border w-full"
                        src="images/HureeMapp.png"
                        alt=""
                    />
                </a>
            </div>
        </div>
    );
}
