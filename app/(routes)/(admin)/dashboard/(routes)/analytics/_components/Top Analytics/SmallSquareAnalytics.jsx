const SmallSquareAnalytics = ({children, value}) => {
    return ( 
        <div className="w-64 h-52 rounded-md bg-white shadow-sm flex justify-center items-center flex-col">
            <h1 className="text-slate-400 text-sm">{children}</h1>
            <h1 className="text-3xl font-bold">{value}</h1>
        </div>
     );
}
 
export default SmallSquareAnalytics ;