type propTypes = {
  children: React.ReactNode,
}

function Title(props: propTypes) {

  return (
    <h1 className='text-4xl tracking-tight text-stone-700 font-sans subpixel-antialiased font-normal pl-4 pt-4 rounded-sm'>
      {props.children}
    </h1>
  );
}
export default Title;
