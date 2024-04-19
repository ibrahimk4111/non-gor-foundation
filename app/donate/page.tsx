import DonateForm from "@/components/donate/Donate";


const Donate = () => {
    return (
        <div>
            <h2 className="bg-green-700 text-white py-4 text-2xl font-bold text-center">Donate to help poor people</h2>
            <div className="max-w-5xl mx-auto">
                <DonateForm />
            </div>
        </div>
    );
};

export default Donate;