
const SocialSidebar = () => {
  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-5">
        <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center
                        transition-all duration-300
                        hover:scale-110 hover:bg-indigo-500 hover:border-indigo-500">
                <span className="text-xl text-white">Icon</span>
        </div>
    </div>
  );
};

export default SocialSidebar;