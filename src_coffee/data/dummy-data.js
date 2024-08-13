import splash from "../models/splash";
import coffee from "../models/coffee";

export const SplashList = [
    new splash(
        1,
        "Moday",
        'https://i.pinimg.com/564x/2c/01/c0/2c01c04c77fda7dad285720119db395e.jpg'
    ),
    new splash(
        2,
        "Tuesday",
        'https://i.pinimg.com/736x/69/14/b7/6914b73b5d8a14fb6213f213b2040a2e.jpg'
    ),
    new splash(
        3,
        "Wenesday",
        'https://i.pinimg.com/564x/58/00/a0/5800a05fbbb618e8d6c6de67946567c5.jpg'
    ),
    new splash(
        4,
        "Thursday",
        'https://i.pinimg.com/564x/33/7b/d9/337bd9bd6eb35ccb2861c009b279f2b2.jpg'
    ),
    new splash(
        5,
        "Friday",
        'https://i.pinimg.com/736x/34/17/0c/34170c95fc829717f8dba2f7e50c2ab8.jpg'
    ),
    new splash(
        6,
        "Saturday",
        'https://i.pinimg.com/564x/c3/f4/d5/c3f4d5e6cb6925cdcc60c30f50092f32.jpg'
    ),
    new splash(
        6,
        "Sunday",
        'https://i.pinimg.com/736x/9b/c7/59/9bc75918bd2da2458de7819512bae25c.jpg'
    ),
]

export const CoffeeList = [
    new coffee(
        1,
        "Cappuchino",
        [
            { id: 1, name: 'Dark Cappuchino', prices: 60, imageUrl: 'https://i.pinimg.com/564x/86/25/6c/86256c40a7797b222202baaac1797c26.jpg', description: 'with steamed milk', coffeeType: 1 },
            { id: 2, name: 'Cappuchino', prices: 50, imageUrl: 'https://i.pinimg.com/564x/39/83/35/398335e846ca67cdffde7324ba3006ba.jpg', description: 'with oat milk', coffeeType: 1 },
            { id: 3, name: 'Cappuchino', prices: 60, imageUrl: 'https://i.pinimg.com/564x/97/81/e2/9781e2038f2891b8e03ed0d8a9535101.jpg', description: 'with llmond milk', coffeeType: 1 },
            { id: 4, name: 'Dry Cappuchino', prices: 80, imageUrl: 'https://i.pinimg.com/564x/d1/df/18/d1df1817509018fed7395fd86c34aebc.jpg', description: 'with foamed milk', coffeeType: 1 }
        ]
    ),
    new coffee(
        2,
        "Americano",
        [
            { id: 1, name: 'Iced Americano', prices: 50, imageUrl: 'https://i.pinimg.com/564x/bc/0c/ff/bc0cffc8b21c24b4b571e98b9ab5da12.jpg', description: 'with ice', coffeeType: 2 },
            { id: 2, name: 'Hot Americano', prices: 50, imageUrl: 'https://i.pinimg.com/564x/d6/f2/e9/d6f2e9113aa8f9aef8b59a8e28bd7255.jpg', description: 'with oat milk', coffeeType: 2 },
        ]
    ),
    new coffee(
        3,
        "Latte",
        [
            { id: 1, name: 'Latte', prices: 50, imageUrl: 'https://i.pinimg.com/564x/86/50/a2/8650a2e29ec10a92a53af08f6928ec4a.jpg', description: 'with ice', coffeeType: 3 },
            { id: 2, name: 'Caramel Latte', prices: 50, imageUrl: 'https://i.pinimg.com/564x/55/f8/7b/55f87b082c2e6f655957e29725e8a0d8.jpg', description: 'with oat milk', coffeeType: 3 },
            { id: 3, name: 'Latte Macchiato', prices: 60, imageUrl: 'https://i.pinimg.com/564x/99/31/50/9931509d8313d21b1f3de17845aae0b6.jpg', description: 'with llmond milk', coffeeType: 3 },
            { id: 4, name: 'Vanilla Latte', prices: 80, imageUrl: 'https://i.pinimg.com/564x/07/8c/f0/078cf053a8f26d272eff596eeb43f049.jpg', description: 'with foamed milk', coffeeType: 3 },
            { id: 5, name: 'Matcha Latte', prices: 80, imageUrl: 'https://i.pinimg.com/736x/e9/a6/9b/e9a69b322c3fdec10b5448e4616095d3.jpg', description: 'with foamed milk', coffeeType: 3 }
        ]
    ),
    new coffee(
        4,
        "Moka",
        [
            { id: 1, name: 'Iced Americano', prices: 50, imageUrl: 'https://i.pinimg.com/564x/bc/0c/ff/bc0cffc8b21c24b4b571e98b9ab5da12.jpg', description: 'with ice', coffeeType: 4 },
            { id: 2, name: 'Cappuchino', prices: 50, imageUrl: 'https://i.pinimg.com/564x/d6/f2/e9/d6f2e9113aa8f9aef8b59a8e28bd7255.jpg', description: 'with oat milk', coffeeType: 4 },
            { id: 3, name: 'Cappuchino', prices: 60, imageUrl: 'https://i.pinimg.com/564x/fa/dd/c7/faddc7a59fc2cf3ba774a25821c951f9.jpg', description: 'with llmond milk', coffeeType: 4 },
            { id: 4, name: 'Dry Cappuchino', prices: 80, imageUrl: 'https://i.pinimg.com/564x/6a/e4/82/6ae482a0690b8ca89fd3acd554a36d66.jpg', description: 'with foamed milk', coffeeType: 4 }
        ]
    ),
    new coffee(
        5,
        "Espresso",
        [
            { id: 1, name: 'Iced Americano', prices: 50, imageUrl: 'https://i.pinimg.com/564x/bc/0c/ff/bc0cffc8b21c24b4b571e98b9ab5da12.jpg', description: 'with ice', coffeeType: 5 },
            { id: 2, name: 'Cappuchino', prices: 50, imageUrl: 'https://i.pinimg.com/564x/d6/f2/e9/d6f2e9113aa8f9aef8b59a8e28bd7255.jpg', description: 'with oat milk', coffeeType: 5 },
            { id: 3, name: 'Cappuchino', prices: 60, imageUrl: 'https://i.pinimg.com/564x/fa/dd/c7/faddc7a59fc2cf3ba774a25821c951f9.jpg', description: 'with llmond milk', coffeeType: 5 },
            { id: 4, name: 'Dry Cappuchino', prices: 80, imageUrl: 'https://i.pinimg.com/564x/6a/e4/82/6ae482a0690b8ca89fd3acd554a36d66.jpg', description: 'with foamed milk', coffeeType: 5 }
        ]
    ),
]