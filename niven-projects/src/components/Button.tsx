export default function Button({ text, onClick }: { text: string; onClick?: () => void }) {
    return (
      <button
        onClick={onClick}
        className="bg-primary text-white px-4 py-2 rounded-md 
                   hover:bg-blue-600 hover:scale-105 transition duration-300"
      >
        {text}
      </button>
    );
  }
  