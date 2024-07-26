import DndCourses from "./DndCourses"

const CourseList = () => {
    return (
        <div className=' flex flex-col pt-16 bg-[#D2E3C8]  min-h-screen'>
            <h2 className="text-[#4F6F52] text-center text-7xl font-bold">Chai aur Code</h2>
            <div className=" container justify-start max-w-7xl flex flex-col rounded-2xl px-28   bg-white mt-12 pl-8 ms-28 ">
                <div className="max-w-lg pl-0 pt-8 pb-5">
                    <p className="text-4xl font-bold ">  Manage Bundle</p>
                    <p className="text-[#4B4747] text-xl pt-3">Change orders of the products based on priority</p>
                </div>
                <DndCourses />
            </div>

        </div>
    )
}

export default CourseList
