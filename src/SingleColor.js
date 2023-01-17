
const SingleColor = ({ rgb, weight, index }) => {
  const bg = rgb.join(',');
  console.log(bg);
  return (
    <>
      <article style={{ backgroundColor: `rgb(${bg})` }} className={'color'}>
        <p className='precent-value'>
          {weight}%
        </p>
        <p className='color-value'></p>
      </article>

    </>

  )
}

export default SingleColor
