export type FloatingUiProps = {
  content: React.ReactNode;
};

export const FloatingUi = (props: FloatingUiProps) => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      {props.content}
    </div>
  );
};
