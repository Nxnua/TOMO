export default function Icons() {
    return (
        <div
            className="fixed right-0 top-3/4 z-100
						bg-transparent flex flex-col space-y-3"
        >
            <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className=" flex px-2
				py-1.5 text-xs font-medium 
				uppercase leading-normal text-white 
				rounded-s-xl "
                style={{ backgroundColor: "#1877f2" }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M10.75,14 C11.9926407,14 13,15.0073593 13,16.25 L13,17.7519766 L12.9921156,17.8604403 C12.6813607,19.9866441 10.7715225,21.0090369 7.5667905,21.0090369 C4.37361228,21.0090369 2.43330141,19.9983408 2.01446278,17.8965776 L2,17.75 L2,16.25 C2,15.0073593 3.00735931,14 4.25,14 L10.75,14 Z M7.5,6 C9.43299662,6 11,7.56700338 11,9.5 C11,11.4329966 9.43299662,13 7.5,13 C5.56700338,13 4,11.4329966 4,9.5 C4,7.56700338 5.56700338,6 7.5,6 Z M19.75,2 C20.9926407,2 22,3.00735931 22,4.25 L22,7.75 C22,8.99264069 20.9926407,10 19.75,10 L18.197189,10 L15.6555465,12.2070729 C15.2384861,12.5691213 14.6068936,12.5245251 14.2448452,12.1074647 C14.0869422,11.9255688 14,11.6927904 14,11.4522588 L13.9993343,9.98619411 C12.8746672,9.86153043 12,8.90790995 12,7.75 L12,4.25 C12,3.00735931 13.0073593,2 14.25,2 L19.75,2 Z" />
                </svg>
                <a href="feedback">Feedback</a>
            </button>
            <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="flex px-2 
				py-1.5 text-xs font-medium 
				uppercase leading-normal text-white 
				rounded-s-xl"
                style={{ backgroundColor: "#c13584" }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12,22A10,10,0,1,0,2,12,10,10,0,0,0,12,22Zm0-2a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,20ZM8,8.994a3.907,3.907,0,0,1,2.319-3.645,4.061,4.061,0,0,1,3.889.316,4,4,0,0,1,.294,6.456,3.972,3.972,0,0,0-1.411,2.114,1,1,0,0,1-1.944-.47,5.908,5.908,0,0,1,2.1-3.2,2,2,0,0,0-.146-3.23,2.06,2.06,0,0,0-2.006-.14,1.937,1.937,0,0,0-1.1,1.8A1,1,0,0,1,8,9Z" />
                </svg>
                <a href="faq">FAQ</a>
            </button>
        </div>
    );
}
