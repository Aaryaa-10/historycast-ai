type Props = {
    name : string;
    era : string;
    selected : boolean;
    description : string;
};

export default function FigureCard({name, era, selected, description  }: Props) {
    return (
        <div className={`p-4 rounded-lg border cursor-pointer ${selected ? "border-blue-500 bg-blue-50" : "border-gray-300"}`} >
            <h2 className="font-bold text-xl">{name}</h2>
            <p className="text-gray-600">{era}</p>
            <p className="text-sm text-gray-500 mt-2">
  {description}
</p>
        </div>
    );
}