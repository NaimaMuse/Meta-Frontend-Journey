import ReactPlayer from 'react-player'

function Video() {
  const videoUrl = 'https://youtu.be/TWcSSDtSz0o'

  return (
    <>
      <h1>React Video Player Example</h1>

      <ReactPlayer
        url={videoUrl}
        playing={false}
        volume={0.5}
      />
    </>
  )
}

export default Video