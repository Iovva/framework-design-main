const PaddedDiv = ({ children, title }) => {
    return (
        <div className="p-10 m-10 border-8 border-purple-700 w-3/4 mx-auto bg-gradient-to-r from-purple-300 to-blue-300 rounded-xl shadow-2xl">
            <h1 className="mb-6 font-extrabold text-4xl text-center text-purple-900">{title}</h1>
            {children}
        </div>
    );
};

export default PaddedDiv;
