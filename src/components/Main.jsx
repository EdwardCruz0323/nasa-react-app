import marsImage from '/src/assets/mars.png';

export default function Main(props){
    const {data} = props;
    const imageUrl = data?.hdurl || marsImage;
    return(
        <div className="imgContainer">
            <img src={imageUrl} alt={data.title || 'bgImage'} className="bgImage"
            onError={(e) => {
                e.target.onerror = null; // Prevents infinite loop
                e.target.src = marsImage; // Fallback to local image on error
            }}
            />
        </div>
    )
}