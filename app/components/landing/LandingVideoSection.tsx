export default function LandingVideoSection() {
    return (
        <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <iframe
                src="https://www.youtube.com/embed/uvQo-X5_w3k"
                title="Treatflow in 60 Sekunden erklärt"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
            />
        </div>
    );
}
