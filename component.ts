import { tv } from "tailwind-variants";

export const styles = tv({
    base: "focus-visible focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants: {
        variant: {
            solid: "text-white",
            outline: "border border-current",
            ghost: "",
            link: "hover:underline"
        },
        colorPalette: {
            slate: "ring-slate-300 data-[variant=outline]:border-slate-300 data-[variant=outline]:text-slate-900",
            red: "data-[variant=outline]:text-red-600",
            orange: "data-[variant=outline]:text-orange-600",
            amber: "data-[variant=outline]:text-amber-600",
            yellow: "data-[variant=outline]:text-yellow-600",
            lime: "data-[variant=outline]:text-lime-600",
            green: "data-[variant=outline]:text-green-600",
            emerald: "data-[variant=outline]:text-emerald-600",
            teal: "data-[variant=outline]:text-teal-600",
            cyan: "data-[variant=outline]:text-cyan-600",
            sky: "data-[variant=outline]:text-sky-600",
            blue: "data-[variant=outline]:text-blue-600",
            indigo: "data-[variant=outline]:text-indigo-600",
            violet: "data-[variant=outline]:text-violet-600",
            purple: "data-[variant=outline]:text-purple-600",
            fuchsia: "data-[variant=outline]:text-fuchsia-600",
            pink: "data-[variant=outline]:text-pink-600",
            rose: "data-[variant=outline]:text-rose-600"
        },
        size: {
            xs: "h-6 gap-1 rounded-md text-xs data-[icon=true]:w-6 data-[icon=false]:px-2 [&>svg]:h-3 [&>svg]:w-3",
            sm: "h-9 gap-2 rounded-md text-sm data-[icon=true]:w-9 data-[icon=false]:px-3 [&>svg]:h-4 [&>svg]:w-4",
            md: "h-10 gap-2 text-sm data-[icon=true]:w-10 data-[icon=false]:px-4 [&>svg]:h-4 [&>svg]:w-4",
            lg: "text-md h-11 gap-2 rounded-md data-[icon=true]:w-11 data-[icon=false]:px-6 [&>svg]:h-5 [&>svg]:w-5"
        }
    },
    compoundVariants: [
        {
            variant: "solid",
            colorPalette: "slate",
            className:
                "bg-slate-900 hover:bg-slate-800 active:bg-slate-700 aria-[expanded=true]:bg-slate-700"
        },
        {
            variant: "solid",
            colorPalette: "blue",
            className:
                "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 aria-[expanded=true]:bg-blue-800"
        },
        {
            variant: "solid",
            colorPalette: "red",
            className:
                "bg-red-500 hover:bg-red-600 active:bg-red-700 aria-[expanded=true]:bg-red-700"
        },
        {
            variant: "solid",
            colorPalette: "orange",
            className:
                "bg-orange-500 hover:bg-orange-600 active:bg-orange-700 aria-[expanded=true]:bg-orange-700"
        },
        {
            variant: "solid",
            colorPalette: "amber",
            className:
                "bg-amber-500 hover:bg-amber-600 active:bg-amber-700 aria-[expanded=true]:bg-amber-700"
        },
        {
            variant: "solid",
            colorPalette: "yellow",
            className:
                "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 aria-[expanded=true]:bg-yellow-700"
        },
        {
            variant: "solid",
            colorPalette: "lime",
            className:
                "bg-lime-500 hover:bg-lime-600 active:bg-lime-700 aria-[expanded=true]:bg-lime-700"
        },
        {
            variant: "solid",
            colorPalette: "green",
            className:
                "bg-green-500 hover:bg-green-600 active:bg-green-700 aria-[expanded=true]:bg-green-700"
        },
        {
            variant: "solid",
            colorPalette: "emerald",
            className:
                "bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 aria-[expanded=true]:bg-emerald-700"
        },
        {
            variant: "solid",
            colorPalette: "teal",
            className:
                "bg-teal-500 hover:bg-teal-600 active:bg-teal-700 aria-[expanded=true]:bg-teal-700"
        },
        {
            variant: "solid",
            colorPalette: "cyan",
            className:
                "bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 aria-[expanded=true]:bg-cyan-700"
        },
        {
            variant: "solid",
            colorPalette: "sky",
            className:
                "bg-sky-500 hover:bg-sky-600 active:bg-sky-700 aria-[expanded=true]:bg-sky-700"
        },
        {
            variant: "solid",
            colorPalette: "blue",
            className:
                "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 aria-[expanded=true]:bg-blue-900"
        },
        {
            variant: "solid",
            colorPalette: "indigo",
            className:
                "bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 aria-[expanded=true]:bg-indigo-700"
        },
        {
            variant: "solid",
            colorPalette: "violet",
            className:
                "bg-violet-500 hover:bg-violet-600 active:bg-violet-700 aria-[expanded=true]:bg-violet-700"
        },
        {
            variant: "solid",
            colorPalette: "purple",
            className:
                "bg-purple-500 hover:bg-purple-600 active:bg-purple-700 aria-[expanded=true]:bg-purple-700"
        },
        {
            variant: "solid",
            colorPalette: "fuchsia",
            className:
                "bg-fuchsia-500 hover:bg-fuchsia-600 active:bg-fuchsia-700 aria-[expanded=true]:bg-fuchsia-700"
        },
        {
            variant: "solid",
            colorPalette: "pink",
            className:
                "bg-pink-500 hover:bg-pink-600 active:bg-pink-700 aria-[expanded=true]:bg-pink-700"
        },
        {
            variant: "solid",
            colorPalette: "rose",
            className:
                "bg-rose-500 hover:bg-rose-600 active:bg-rose-700 aria-[expanded=true]:bg-rose-700"
        },
        {
            variant: "outline",
            colorPalette: "slate",
            className: "hover:bg-slate-100 active:bg-slate-200 aria-[expanded=true]:bg-slate-200"
        },
        {
            variant: "outline",
            colorPalette: "red",
            className: "hover:bg-red-50 active:bg-red-100 aria-[expanded=true]:bg-red-100"
        },
        {
            variant: "outline",
            colorPalette: "orange",
            className: "hover:bg-orange-50 active:bg-orange-100 aria-[expanded=true]:bg-orange-100"
        },
        {
            variant: "outline",
            colorPalette: "amber",
            className: "hover:bg-amber-50 active:bg-amber-100 aria-[expanded=true]:bg-amber-100"
        },
        {
            variant: "outline",
            colorPalette: "yellow",
            className: "hover:bg-yellow-50 active:bg-yellow-100 aria-[expanded=true]:bg-yellow-100"
        },
        {
            variant: "outline",
            colorPalette: "lime",
            className: "hover:bg-lime-50 active:bg-lime-100 aria-[expanded=true]:bg-lime-100"
        },
        {
            variant: "outline",
            colorPalette: "green",
            className: "hover:bg-green-50 active:bg-green-100 aria-[expanded=true]:bg-green-100"
        },
        {
            variant: "outline",
            colorPalette: "emerald",
            className:
                "hover:bg-emerald-50 active:bg-emerald-100 aria-[expanded=true]:bg-emerald-100"
        },
        {
            variant: "outline",
            colorPalette: "teal",
            className: "hover:bg-teal-50 active:bg-teal-100 aria-[expanded=true]:bg-teal-100"
        },
        {
            variant: "outline",
            colorPalette: "cyan",
            className: "hover:bg-cyan-50 active:bg-cyan-100 aria-[expanded=true]:bg-cyan-100"
        },
        {
            variant: "outline",
            colorPalette: "sky",
            className: "hover:bg-sky-50 active:bg-sky-100 aria-[expanded=true]:bg-sky-100"
        },
        {
            variant: "outline",
            colorPalette: "blue",
            className: "hover:bg-blue-50 active:bg-blue-100 aria-[expanded=true]:bg-blue-100"
        },
        {
            variant: "outline",
            colorPalette: "indigo",
            className: "hover:bg-indigo-50 active:bg-indigo-100 aria-[expanded=true]:bg-indigo-100"
        },
        {
            variant: "outline",
            colorPalette: "violet",
            className: "hover:bg-violet-50 active:bg-violet-100 aria-[expanded=true]:bg-violet-100"
        },
        {
            variant: "outline",
            colorPalette: "purple",
            className: "hover:bg-purple-50 active:bg-purple-100 aria-[expanded=true]:bg-purple-100"
        },
        {
            variant: "outline",
            colorPalette: "fuchsia",
            className:
                "hover:bg-fuchsia-50 active:bg-fuchsia-100 aria-[expanded=true]:bg-fuchsia-100"
        },
        {
            variant: "outline",
            colorPalette: "pink",
            className: "hover:bg-pink-50 active:bg-pink-100 aria-[expanded=true]:bg-pink-100"
        },
        {
            variant: "outline",
            colorPalette: "rose",
            className: "hover:bg-rose-50 active:bg-rose-100 aria-[expanded=true]:bg-rose-100"
        },
        {
            variant: "ghost",
            colorPalette: "slate",
            className: "hover:bg-slate-100 active:bg-slate-200 aria-[expanded=true]:bg-slate-200"
        },
        {
            variant: "ghost",
            colorPalette: "red",
            className: "hover:bg-red-100 active:bg-red-200 aria-[expanded=true]:bg-red-200"
        },
        {
            variant: "ghost",
            colorPalette: "orange",
            className: "hover:bg-orange-100 active:bg-orange-200 aria-[expanded=true]:bg-orange-200"
        },
        {
            variant: "ghost",
            colorPalette: "amber",
            className: "hover:bg-amber-100 active:bg-amber-200 aria-[expanded=true]:bg-amber-200"
        },
        {
            variant: "ghost",
            colorPalette: "yellow",
            className: "hover:bg-yellow-100 active:bg-yellow-200 aria-[expanded=true]:bg-yellow-200"
        },
        {
            variant: "ghost",
            colorPalette: "lime",
            className: "hover:bg-lime-100 active:bg-lime-200 aria-[expanded=true]:bg-lime-200"
        },
        {
            variant: "ghost",
            colorPalette: "green",
            className: "hover:bg-green-100 active:bg-green-200 aria-[expanded=true]:bg-green-200"
        },
        {
            variant: "ghost",
            colorPalette: "emerald",
            className:
                "hover:bg-emerald-100 active:bg-emerald-200 aria-[expanded=true]:bg-emerald-200"
        },
        {
            variant: "ghost",
            colorPalette: "teal",
            className: "hover:bg-teal-100 active:bg-teal-200 aria-[expanded=true]:bg-teal-200"
        },
        {
            variant: "ghost",
            colorPalette: "cyan",
            className: "hover:bg-cyan-100 active:bg-cyan-200 aria-[expanded=true]:bg-cyan-200"
        },
        {
            variant: "ghost",
            colorPalette: "sky",
            className: "hover:bg-sky-100 active:bg-sky-200 aria-[expanded=true]:bg-sky-200"
        },
        {
            variant: "ghost",
            colorPalette: "blue",
            className: "hover:bg-blue-100 active:bg-blue-200 aria-[expanded=true]:bg-blue-200"
        },
        {
            variant: "ghost",
            colorPalette: "indigo",
            className: "hover:bg-indigo-100 active:bg-indigo-200 aria-[expanded=true]:bg-indigo-200"
        },
        {
            variant: "ghost",
            colorPalette: "violet",
            className: "hover:bg-violet-100 active:bg-violet-200 aria-[expanded=true]:bg-violet-200"
        },
        {
            variant: "ghost",
            colorPalette: "purple",
            className: "hover:bg-purple-100 active:bg-purple-200 aria-[expanded=true]:bg-purple-200"
        },
        {
            variant: "ghost",
            colorPalette: "fuchsia",
            className:
                "hover:bg-fuchsia-100 active:bg-fuchsia-200 aria-[expanded=true]:bg-fuchsia-200"
        },
        {
            variant: "ghost",
            colorPalette: "pink",
            className: "hover:bg-pink-100 active:bg-pink-200 aria-[expanded=true]:bg-pink-200"
        },
        {
            variant: "ghost",
            colorPalette: "rose",
            className: "hover:bg-rose-100 active:bg-rose-200 aria-[expanded=true]:bg-rose-200"
        }
    ],
    defaultVariants: {
        variant: "solid",
        colorPalette: "slate",
        size: "md"
    }
});
