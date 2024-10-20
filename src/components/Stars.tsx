import { Star } from './Star.tsx';

type TCount = {
    count: number;
}

export const Stars = (props: TCount) => {
    const { count } = props;
    if (count < 1 || count > 5) {
        return null;
    }

    const arr: number[] = [];
    for (let i: number = 1; i <= count; i++) {
        arr.push(i);
    }

    return (
        <ul className="card-body-stars u-clearfix">
            {arr.map(item => <Star key={item} />)}
        </ul>
    );
}