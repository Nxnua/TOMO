export default function Icons() { 
	return ( 
		<div className="fixed left-0 top-2/4 z-50 
						bg-transparent flex flex-col space-y-3"> 
			<button 
				type="button" 
				data-te-ripple-init 
				data-te-ripple-color="light" 
				className="flex px-2 
				py-1.5 text-xs font-medium 
				uppercase leading-normal text-white 
				rounded-r-xl " 
				style={{ backgroundColor: "#9654f2" }}> 
				<svg 
					xmlns="http://www.w3.org/2000/svg" 
					className="mr-2 h-4 w-4" 
					fill="currentColor" 
					viewBox="0 0 24 24"> 
					<path d= 
"M12,22A10,10,0,1,0,2,12,10,10,0,0,0,12,22Zm0-2a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,20ZM8,8.994a3.907,3.907,0,0,1,2.319-3.645,4.061,4.061,0,0,1,3.889.316,4,4,0,0,1,.294,6.456,3.972,3.972,0,0,0-1.411,2.114,1,1,0,0,1-1.944-.47,5.908,5.908,0,0,1,2.1-3.2,2,2,0,0,0-.146-3.23,2.06,2.06,0,0,0-2.006-.14,1.937,1.937,0,0,0-1.1,1.8A1,1,0,0,1,8,9Z" /> 
				</svg> 
				Answer & question
			</button> 
			<button 
				type="button" 
				data-te-ripple-init 
				data-te-ripple-color="light" 
				className="flex px-2 
				py-1.5 text-xs font-medium 
				uppercase leading-normal text-white 
				rounded-r-xl " 
				style={{ backgroundColor: "#1877f2" }}> 
				<svg 
					xmlns="http://www.w3.org/2000/svg" 
					className="mr-2 h-4 w-4" 
					fill="currentColor" 
					viewBox="0 0 24 24"> 
					<path d= 
"M5.136 5C6.164 5 7 5.774 7 6.726v1.547C7 9.226 6.164 10 5.136 10h-.272C3.836 10 3 9.226 3 8.274V6.726C3 5.774 3.836 5 4.864 5h.272m0-2h-.272C2.74 3 1 4.677 1 6.726v1.547C1 10.323 2.74 12 4.864 12h.27C7.262 12 9 10.323 9 8.274V6.726C9 4.676 7.26 3 5.136 3zM5 15c1.654 0 3 1.346 3 3v4l-6-.01V18c0-1.654 1.346-3 3-3m0-2c-2.75 0-5 2.25-5 5v4.33c0 .92.75 1.66 1.67 1.66l6.66.01c.92 0 1.67-.75 1.67-1.67V18c0-2.75-2.25-5-5-5zM22 2v4h-4.633l-.587.59-.78.787V6h-3V2h9m0-2h-9c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h1v2c0 .35.21.77.51.92.12.05.24.08.36.08.21 0 .41-.07.57-.22L18.2 8H22c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" /> 
				</svg> 
				Feedback
			</button> 
			{/* <button 
				type="button" 
				data-te-ripple-init 
				data-te-ripple-color="light" 
				className="flex px-2 
				py-1.5 text-xs font-medium 
				uppercase leading-normal text-white 
				rounded-r-xl " 
				style={{ backgroundColor: "#1877f2" }}> 
				<svg 
					xmlns="http://www.w3.org/2000/svg" 
					className="mr-2 h-3.5 w-3.5" 
					fill="currentColor" 
					viewBox="0 0 24 24"> 
					<path d= 
"M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /> 
				</svg> 
				Facebook 
			</button> 
			<button 
				type="button" 
				data-te-ripple-init 
				data-te-ripple-color="light" 
				className="flex px-2 
				py-1.5 text-xs font-medium 
				uppercase leading-normal text-white 
				rounded-r-xl " 
				style={{ backgroundColor: "#c13584" }}> 
				<svg 
					xmlns="http://www.w3.org/2000/svg" 
					className="mr-2 h-3.5 w-3.5" 
					fill="currentColor" 
					viewBox="0 0 24 24"> 
					<path d= 
"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /> 
				</svg> 
				Instagram 
			</button>  */}
		</div> 
	) 
}
