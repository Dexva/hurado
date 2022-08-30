import React from "react";

type NoiPHProps = {
  width: string;
  height: string;
  className: string;
}

export const NoiPH = (props: NoiPHProps) => (
  <svg className={props.className} width={props.width} height={props.height} viewBox={`0 0 ${props.width} ${props.height}`} fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <rect width={props.width} height={props.height} fill="url(#pattern1)"/>
    <defs>
      <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image1_230_630" transform="translate(-0.00922404) scale(0.00387243 0.00241546)"/>
      </pattern>
      <image id="image1_230_630" width="100" height="100" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAASCAYAAAD2Uea5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQJSURBVHgB7VZbaBxlFP7O7G62m5ir6bYNRqqpBWtakqbb1o1SaVEUQaioffXSqPjkQwXxIQg+FHyQ4otUfVAEH2wRVKovxaJFaXMPkabVUtfGkstSt0m2u5nO7By/nW42s9mN2YhBlH4DM/+cc+b85/4P8D+CYDXRpW281xbQ5jCKT2SqnM91F7bAQVUBMYO7ZACf4b8G3YGdRbRt2LWUvL/g7TENYh3uJNVfJBnABN6TRP79ZQ3Dxu1Fcj5Sj8ov+ffntZq0FldDFiYuzVWtaQz+aFZiKdzAhIxivCQvAIv5bnPXAsUszstFaoW3zA7qHTCYVmCEz0yRkgyaSG+ioV/jBd1HpZOkFpeLzbIQRFgeZ+mE8lqHFC6QaiMNORQ98uphq7vBb1Z248SkWdLgGWzkfQP3M6UPPYvZugnB3F5C7XfTlZQMIbaQAcFWvC/fYGlM4SX140V9HAl8h2OS/AvZXyn7KJ+V1Pm52b/hXiNghZMZe/jd/teqjIA0mA86TcYjjdWZjNEQ2j51ctH3F3UrrjJgT3Fd5Mx8JlzEcE4jiGZXC84o47YcfDjPaOyhIyeWlXVcfembS7vRgREIOf4DT2/+MmQ7gagaWK/ia/b9PFepndjN7Nm0QXAPBuQYMjKChHagoBRZXlHaMOvmw0R/VsZlWEjpFlR4M6PLGjhLmSCTXy7kpmyoI37aGgx3qg/PtdRcYgMbMBTfG1esI/6vrh+XH3AmbzBYokBvPiTz9AiDKPhJepgxtgLfm+lAUM6xl91NoOUb9jeR6g13mkNrn4HhPMzAF0wiXWvstQ7Vt6UHGw8mBuvqct4ESyqyYOUccSG9GKMDm7wiK3MmVEb2FsERmYHKxoyD4h5LscmzfIhdFwjYLk1xraQi4YwrxnR+Ve3NjK7OAXrbjsmRYPvU2wbkJET7vDxD9Xjg9avTofb4R9IaT7JsGlDhjvFiOBjXVvbKvLnb8SQPkN+8In6sBFV0+TpbsBw4lM1JmsP1rSTcr2p8/O3Ynti+ulP3odp406pB0DncUK+J+G7+GTi0xuYo/sKjJX9EyDCusE/W89AMYw3ayemTsxziHqy8Z7Jl8Io2lyGZN0Qdv6kijcGq2g+G4m0x47Idu+GkT5E1TnqGRp2hsT3Sj4H8N61o5l7TXoXskwmO6wN0/BplL3tscqtqobS6tIuuXUC2Do9StRfPah3bchtjF2K0EzSznlHMDlOjhAsGZSqo+TQ32U/K7172GzvfeeitRHc6+YDvw9rozB95eyI81a3cX0LWuGB2orMOMuyGLHzUK6jhfZTPFLkt7CJxp7APm/EEPsW/Ad3v31tE61j6n6tcrPpoLokxO4lVwMoGwD8FB7M8zSOLaBO4hQX8CYmeaTKm311NAAAAAElFTkSuQmCC"/>
    </defs>
  </svg>
);
