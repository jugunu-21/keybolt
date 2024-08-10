export const ImagePartion=()=>{
    const image="https://quotefancy.com/media/wallpaper/3840x2160/2090601-Charles-Handy-Quote-Change-is-only-another-word-for-growth-another.jpg"
      const image2="https://media.istockphoto.com/id/1155399377/photo/strategy-execution-success-concept.jpg?s=1024x1024&w=is&k=20&c=FeU0dmuCWWOImturRNPSFOGP-lGO6dM-YZs8vl4rUsc="
    return(
        <div className="w-[vw] h-38 sm:h-[300px]">
      <div
        className="h-40 sm:h-full w-full bg-cover bg-center text-2xl "
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
    </div>
    )
}
