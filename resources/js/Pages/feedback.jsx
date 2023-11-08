import Header from "../components/header"
import Footer from "../components/footer"
import Faq from "../components/faq"

export default function Feedback() {
  return (
    <div>
        <Header />

        <Faq/>

		<div className="w-screen h-[100vh] bg-white">
		
		<div className="absolute mt-52 ml-48 w-80 float-left border-2 p-2 rounded-xl shadow-xl text-xl">
			<form>
				<p className="text-2xl">Feedback & Queries</p>
				<div> 
					<label className="text-sm">Select Issue*</label> 
					<br></br> 
					<select className="bg-gray-50 border border-gray-300 
										text-gray-600 text-sm rounded-lg 
										focus:border-blue-500 w-full p-2.5"> 
						<option value="Feedback" > 
							-- Select Your Query -- 
						</option> 
						<option value="Feedback" > 
							Feedback 
						</option> 
						<option value="Feedback"> 
							Payment Related Issue 
						</option> 
						<option value="Feedback"> 
							Advertise With Us 
						</option> 
					</select> 
					<br></br> 
					<label className="text-sm">Email Address*</label> 
					<br></br> 
					<input className="bg-gray-50 border border-gray-300 
										text-sm rounded-lg focus:border-blue-500 
										w-full p-2.5"
							type="email"
							placeholder="sotomofeedback@gmail.com"/> 
					<br></br> 
					<label className="text-sm">Username</label> 
					<br></br> 
					<input className="bg-gray-50 border border-gray-300 
										text-sm rounded-lg focus:border-blue-500 
										w-full p-2.5"
							type="text"
							placeholder="Jonahtan"/> 
					<br></br> 
					<label className="text-sm"> 
						Drop Your Query 
					</label> 
					<br></br> 
					<textarea className="bg-gray-50 border border-gray-300 
											text-sm rounded-lg 
											focus:border-blue-500 
											w-full p-2.5"
								rows="4"
								cols="25"
								maxlength="300"
								placeholder="Max Allowed Characters: 300"> 
					</textarea> 
					<br></br> 
					<button className="bg-blue-500 hover:bg-blue-700 
										text-white font-bold 
										py-2 px-4 rounded"
							type="button"> 
						Submit 
					</button> 
				</div> 
			</form> 
		</div>
		<div className="absolute mt-52 ml-[60vh] w-[120vh] h-[50vh] border-2 p-2 rounded-xl">
			Map
		</div>
		</div>
      <div className="">
        <Footer />
      </div>

    </div>
  );
}

