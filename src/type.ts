export interface Hello {
    text: string;
}
export const user = {
    name: 'user1',
};

// default는 한가지만 export 되기 때문에 네임이 의미가 없어서 생략 가능..
/* export default class A {
    a() {}
} */

type d = Hello & { hi(): void };
export default d;

/* export default function () {
 default는 하나만 되기 때문에 에러가 남
} */
