export default function({children} : {
    children: React.ReactNode
}) {
    return(
    <>
        <div className="p-4 border-b text-center">
            All Courses are at 100% Sale for the next three days.
        </div>
        {children}
    </>
    )
}