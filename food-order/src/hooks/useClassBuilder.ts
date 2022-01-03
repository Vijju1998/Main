import { useMemo, DependencyList } from "react";
interface styleProps {
  [key: string]: string | string | undefined;
}
interface ClassMap {
  [key: string]: string | { [key: string]: string };
}
interface builderProps {
  styleProps: styleProps;
  classMap: ClassMap;
}
export const useClassBuilder = (
  { styleProps, classMaps }: buildProps,
  deps: DependencyList
) => {
  return {
    classList: Object.keys(classMaps).reduce(
      (classNames: string, classMapKey: string) => {
        const classObj = classMaps[classMapKey as keyof typeof classMaps];
        const propVal = styleProps[classMapKey as keyof styleProps];
        return propVal;
      }
    ),
  };
};
