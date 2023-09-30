/*eslint-disable react-hooks/exhaustive-deps */
import { useMemo, DependencyList } from 'react';

interface ClassMap {
  [key: string]: string | { [key: string]: string };
}

interface styleProps {
  [key: string]: string | boolean | undefined;
}

interface builderProps {
  styleProps: styleProps;
  classMap: ClassMap;
  baseClasses?: string;
}
export const useClassBuilder = (
  { styleProps, classMap, baseClasses }: builderProps,
  deps: DependencyList
): { classList: string } => {
  return {
    classList: useMemo(() => {
      return Object.keys(classMap)
        .reduce(
          (classNames: string, classMapKey: string) => {
            const classObj = classMap[classMapKey as keyof typeof classMap];
            const propVal = styleProps[classMapKey as keyof styleProps];
            if (typeof classObj === 'string' && typeof propVal === 'boolean') {
              return propVal ? `${classNames} ${classObj}` : classNames;
            }
            const className =
              typeof classObj === 'object'
                ? classObj[propVal as keyof typeof classObj]
                : undefined;
            return className !== undefined
              ? `${classNames} ${className}`
              : classNames;
          },
          baseClasses ? `${baseClasses}` : ''
        )
        .trim();
    }, [...deps]),
  };
};
