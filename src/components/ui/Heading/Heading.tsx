type HeadingProps = {
  title: string;
  subtitle: string;
}

export function Heading({ title, subtitle }: HeadingProps) {
  return(
       <div>
          <h1 className="text-2xl font-semibold text-white">
            {title}
          </h1>
          <p className="text-sm text-white/60">
            {subtitle}
          </p>
      </div>
  );
}
