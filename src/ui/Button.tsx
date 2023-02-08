type ButtonPropTypes = {
  title: string,
  onClick: React.MouseEventHandler<HTMLElement>
}

function Button(props: ButtonPropTypes) {
  return (
    <button
      className={'px-5 w-44 h-14 border bg-white border-purple-500 dark:text-slate-200 dark:bg-inherit text-purple-900 rounded-lg hover:text-white hover:bg-purple-500 hover active:bg-violet-700 focus:ring-purple-600 focus:ring-offset-2'}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  )
}

export default Button;
