import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES = [
  new Category("c1", "Vietnamese", require("../assets/vietnamese.jpg")),
  new Category("c2", "Italian", require("../assets/italian.png")),
  new Category("c3", "American", require("../assets/american.jpg")),
  new Category("c4", "German", require("../assets/german.jpg")),
  new Category("c5", "Indian", require("../assets/india.png")),
  new Category("c6", "Mexican", require("../assets/mexico.png")),
  new Category("c7", "Chinese", require("../assets/china.png")),
  new Category("c8", "Polish", require("../assets/poland.jpg")),
  new Category("c9", "French", require("../assets/french.jpg")),
  new Category("c10", "Japanese", require("../assets/japan.jpg")),
];

const ingredients = [
  {
    imageUrl: "https://png.pngtree.com/png-vector/20191025/ourlarge/pngtree-bread-icon-cartoon-style-png-image_1858025.jpg",
    name: "Bánh mì",
    quantity: "2 ổ",
  },
  {
    imageUrl: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-bacon-slice-icon-fresh-tasty-meat-cut-design-food-pork-vector-png-image_12641115.png",
    name: "Thịt lợn",
    quantity: "150g",
  },
  {
    imageUrl: "https://png.pngtree.com/png-vector/20240730/ourlarge/pngtree-turmeric-spice-powder-with-green-leaves-isolated-on-transparent-background-ai-png-image_13294687.png",
    name: "Riềng",
    quantity: "30g",
  },
  {
    imageUrl: "https://png.pngtree.com/png-clipart/20230923/original/pngtree-leek-vegetable-icon-template-isolated-natural-lemongrass-vector-png-image_12833329.png",
    name: "Sả tươi",
    quantity: "2 cây",
  },
  {
    imageUrl: "https://png.pngtree.com/png-vector/20191025/ourlarge/pngtree-bread-icon-cartoon-style-png-image_1858025.jpg",
    name: "Đường cát trắng",
    quantity: "50g",
  },
  {
    imageUrl: "https://png.pngtree.com/png-vector/20191025/ourlarge/pngtree-bread-icon-cartoon-style-png-image_1858025.jpg",
    name: "Muối",
    quantity: "25g",
  },
  {
    imageUrl: "https://png.pngtree.com/png-vector/20191025/ourlarge/pngtree-bread-icon-cartoon-style-png-image_1858025.jpg",
    name: "Nước cốt chanh",
    quantity: "10g",
  },
  {
    imageUrl: "https://png.pngtree.com/png-vector/20191025/ourlarge/pngtree-bread-icon-cartoon-style-png-image_1858025.jpg",
    name: "Xì dầu",
    quantity: "40ml",
  },
  {
    imageUrl: "https://png.pngtree.com/png-vector/20191025/ourlarge/pngtree-bread-icon-cartoon-style-png-image_1858025.jpg",
    name: "Vừng rang",
    quantity: "5g",
  },
  {
    imageUrl: "https://png.pngtree.com/png-vector/20191025/ourlarge/pngtree-bread-icon-cartoon-style-png-image_1858025.jpg",
    name: "Rau ăn kèm",
    quantity: "50g",
  },
]

export const MEALS = [
  // Món ăn Việt Nam
  new Meal(
    "m1",
    ["c1"],
    "Bánh mì",
    "affordable",
    "simple",
    "https://static.vinwonders.com/production/banh-mi-sai-gon-2.jpg",
    20,
    [
      {
        imageUrl: "https://png.pngtree.com/png-vector/20191025/ourlarge/pngtree-bread-icon-cartoon-style-png-image_1858025.jpg",
        name: "Bánh mì",
        quantity: "2 ổ",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-bacon-slice-icon-fresh-tasty-meat-cut-design-food-pork-vector-png-image_12641115.png",
        name: "Thịt lợn",
        quantity: "150g",
      },
      {
        imageUrl: "https://png.pngtree.com/png-vector/20240730/ourlarge/pngtree-turmeric-spice-powder-with-green-leaves-isolated-on-transparent-background-ai-png-image_13294687.png",
        name: "Riềng",
        quantity: "30g",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230923/original/pngtree-leek-vegetable-icon-template-isolated-natural-lemongrass-vector-png-image_12833329.png",
        name: "Sả tươi",
        quantity: "2 cây",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Đường cát trắng",
        quantity: "50g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Muối",
        quantity: "25g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Nước cốt chanh",
        quantity: "10g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Xì dầu",
        quantity: "40ml",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Vừng rang",
        quantity: "5g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Rau ăn kèm",
        quantity: "50g",
      },
    ],
    [
      "Thịt lợn mua về rửa sạch với nước muối để loại bỏ hết các tạp chất. Sau đó thái thành các miếng mỏng dài hay vuông đều được, tùy vào sở thích của bạn.Rửa sạch nghệ, riềng, sả rồi cạo hết vỏ, đập dập để ướp thịt..",
      "Cho phần thịt đã thái vào bát to, ướp với nghệ, riềng, sả đập dập, thêm với muối, đường, nước cốt chanh, xì dầu và vừng rang. Trộn đều tay các nguyên liệu để các gia vị ngấm vào thịt.",
      "Sau khi thịt đã được ướp đủ thời gian, gia vị ngấm đều thì bạn bỏ ra để chuẩn bị xiên thịt vào que.Bạn thực hiện xiên lần lượt từng miếng thịt vào que, dàn đều thành một que dài, làm tương tự cho các que khác đến hết số thịt đã chuẩn bị.",
      "Đốt than đến khi than cháy hết lửa hồng lên, bạn đặt từng xiên thịt lên bếp để nướng trong khoảng 8 - 10 phút. Vì thịt đã được thái mỏng nên rất dễ cháy, bạn lưu ý phải lật liên tục để thịt chín vàng đều.",
      "Trong quá trình nướng bạn nhớ trở đều tay, nướng thịt đến khi dậy mùi thơm, chuyển màu cánh gián vàng đều 2 mặt, bạn nhanh chóng bỏ xuống khỏi bếp nếu không thịt sẽ cháy khét.",
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    "m2",
    ["c1"],
    "Bún bò",
    "affordable",
    "simple",
    "https://static.vinwonders.com/production/bun-bo-hue-cau-giay-1.jpg",
    180,
    [
      {
        imageUrl: "https://png.pngtree.com/png-vector/20191025/ourlarge/pngtree-bread-icon-cartoon-style-png-image_1858025.jpg",
        name: "Bánh mì",
        quantity: "2 ổ",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-bacon-slice-icon-fresh-tasty-meat-cut-design-food-pork-vector-png-image_12641115.png",
        name: "Thịt lợn",
        quantity: "150g",
      },
      {
        imageUrl: "https://png.pngtree.com/png-vector/20240730/ourlarge/pngtree-turmeric-spice-powder-with-green-leaves-isolated-on-transparent-background-ai-png-image_13294687.png",
        name: "Riềng",
        quantity: "30g",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230923/original/pngtree-leek-vegetable-icon-template-isolated-natural-lemongrass-vector-png-image_12833329.png",
        name: "Sả tươi",
        quantity: "2 cây",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Đường cát trắng",
        quantity: "50g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Muối",
        quantity: "25g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Nước cốt chanh",
        quantity: "10g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Xì dầu",
        quantity: "40ml",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Vừng rang",
        quantity: "5g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Rau ăn kèm",
        quantity: "50g",
      },
    ],
    [
      "Thịt lợn mua về rửa sạch với nước muối để loại bỏ hết các tạp chất. Sau đó thái thành các miếng mỏng dài hay vuông đều được, tùy vào sở thích của bạn.Rửa sạch nghệ, riềng, sả rồi cạo hết vỏ, đập dập để ướp thịt..",
      "Boil some water - add salt to it once it boils.",
      "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
      "In the meantime, heaten up some olive oil and add the cut onion.",
      "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
      "The sauce will be done once the spaghetti are.",
      "Feel free to add some cheese on top of the finished dish.",
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    "m3",
    ["c1"],
    "Phở",
    "affordable",
    "simple",
    "https://media.vneconomy.vn/w800/images/upload/2024/01/13/phos-1920x1280.jpg",
    180,
    [
      {
        imageUrl: "https://png.pngtree.com/png-vector/20191025/ourlarge/pngtree-bread-icon-cartoon-style-png-image_1858025.jpg",
        name: "Bánh mì",
        quantity: "2 ổ",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-bacon-slice-icon-fresh-tasty-meat-cut-design-food-pork-vector-png-image_12641115.png",
        name: "Thịt lợn",
        quantity: "150g",
      },
      {
        imageUrl: "https://png.pngtree.com/png-vector/20240730/ourlarge/pngtree-turmeric-spice-powder-with-green-leaves-isolated-on-transparent-background-ai-png-image_13294687.png",
        name: "Riềng",
        quantity: "30g",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230923/original/pngtree-leek-vegetable-icon-template-isolated-natural-lemongrass-vector-png-image_12833329.png",
        name: "Sả tươi",
        quantity: "2 cây",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Đường cát trắng",
        quantity: "50g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Muối",
        quantity: "25g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Nước cốt chanh",
        quantity: "10g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Xì dầu",
        quantity: "40ml",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Vừng rang",
        quantity: "5g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Rau ăn kèm",
        quantity: "50g",
      },
    ],
    [
      "Cut the tomatoes and the onion into small pieces.",
      "Boil some water - add salt to it once it boils.",
      "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
      "In the meantime, heaten up some olive oil and add the cut onion.",
      "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
      "The sauce will be done once the spaghetti are.",
      "Feel free to add some cheese on top of the finished dish.",
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    "m4",
    ["c1"],
    "Bún đậu mắm tôm",
    "affordable",
    "simple",
    "https://static.vinwonders.com/production/bun-dau-mam-tom-ha-noi-1.jpg",
    60,
    [
      {
        imageUrl: "https://png.pngtree.com/png-vector/20191025/ourlarge/pngtree-bread-icon-cartoon-style-png-image_1858025.jpg",
        name: "Bánh mì",
        quantity: "2 ổ",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-bacon-slice-icon-fresh-tasty-meat-cut-design-food-pork-vector-png-image_12641115.png",
        name: "Thịt lợn",
        quantity: "150g",
      },
      {
        imageUrl: "https://png.pngtree.com/png-vector/20240730/ourlarge/pngtree-turmeric-spice-powder-with-green-leaves-isolated-on-transparent-background-ai-png-image_13294687.png",
        name: "Riềng",
        quantity: "30g",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230923/original/pngtree-leek-vegetable-icon-template-isolated-natural-lemongrass-vector-png-image_12833329.png",
        name: "Sả tươi",
        quantity: "2 cây",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Đường cát trắng",
        quantity: "50g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Muối",
        quantity: "25g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Nước cốt chanh",
        quantity: "10g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Xì dầu",
        quantity: "40ml",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Vừng rang",
        quantity: "5g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Rau ăn kèm",
        quantity: "50g",
      },
    ],
    [
      "Cut the tomatoes and the onion into small pieces.",
      "Boil some water - add salt to it once it boils.",
      "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
      "In the meantime, heaten up some olive oil and add the cut onion.",
      "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
      "The sauce will be done once the spaghetti are.",
      "Feel free to add some cheese on top of the finished dish.",
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    "m5",
    ["c2"],
    "Toast Hawaii",
    "affordable",
    "simple",
    "https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg",
    10,
    [
      {
        imageUrl: "https://png.pngtree.com/png-vector/20191025/ourlarge/pngtree-bread-icon-cartoon-style-png-image_1858025.jpg",
        name: "Slice White Bread",
        quantity: "1 miếng",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-bacon-slice-icon-fresh-tasty-meat-cut-design-food-pork-vector-png-image_12641115.png",
        name: "Slice Ham",
        quantity: "1 miếng",
      },
      {
        imageUrl: "https://png.pngtree.com/png-vector/20240730/ourlarge/pngtree-turmeric-spice-powder-with-green-leaves-isolated-on-transparent-background-ai-png-image_13294687.png",
        name: "Slice Pineapple",
        quantity: "30g",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230923/original/pngtree-leek-vegetable-icon-template-isolated-natural-lemongrass-vector-png-image_12833329.png",
        name: "Slices of Cheese",
        quantity: "2 cây",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Butter",
        quantity: "50g",
      },
    ],
    [
      "Butter one side of the white bread",
      "Layer ham, the pineapple and cheese on the white bread",
      "Bake the toast for round about 10 minutes in the oven at 200°C",
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    "m6",
    ["c3"],
    "Classic Hamburger",
    "pricey",
    "simple",
    "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
    45,
    [
      {
        imageUrl: "https://png.pngtree.com/png-vector/20191025/ourlarge/pngtree-bread-icon-cartoon-style-png-image_1858025.jpg",
        name: "Cattle Hack",
        quantity: "300g",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-bacon-slice-icon-fresh-tasty-meat-cut-design-food-pork-vector-png-image_12641115.png",
        name: "Tomato",
        quantity: "1 quả",
      },
      {
        imageUrl: "https://png.pngtree.com/png-vector/20240730/ourlarge/pngtree-turmeric-spice-powder-with-green-leaves-isolated-on-transparent-background-ai-png-image_13294687.png",
        name: "Cucumber",
        quantity: "1 quả",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230923/original/pngtree-leek-vegetable-icon-template-isolated-natural-lemongrass-vector-png-image_12833329.png",
        name: "Onion",
        quantity: "1 quả",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Ketchup",
        quantity: "50g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Burger Buns",
        quantity: "2",
      },
    ],
    [
      "Form 2 patties",
      "Fry the patties for c. 4 minutes on each side",
      "Quickly fry the buns for c. 1 minute on each side",
      "Bruch buns with ketchup",
      "Serve burger with tomato, cucumber and onion",
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    "m7",
    ["c4"],
    "Wiener Schnitzel",
    "luxurious",
    "challenging",
    "https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg",
    60,
    [
      {
        imageUrl: "https://png.pngtree.com/png-vector/20191025/ourlarge/pngtree-bread-icon-cartoon-style-png-image_1858025.jpg",
        name: "Veal Cutlets",
        quantity: "8",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-bacon-slice-icon-fresh-tasty-meat-cut-design-food-pork-vector-png-image_12641115.png",
        name: "Eggs",
        quantity: "4",
      },
      {
        imageUrl: "https://png.pngtree.com/png-vector/20240730/ourlarge/pngtree-turmeric-spice-powder-with-green-leaves-isolated-on-transparent-background-ai-png-image_13294687.png",
        name: "Bread Crumbs",
        quantity: "200g",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230923/original/pngtree-leek-vegetable-icon-template-isolated-natural-lemongrass-vector-png-image_12833329.png",
        name: "Flour",
        quantity: "100g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Butter",
        quantity: "300ml",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Vegetable Oil",
        quantity: "100g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Salt",
        quantity: "10g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Lemon Slices",
        quantity: "2",
      },
    ],
    [
      "Tenderize the veal to about 2–4mm, and salt on both sides.",
      "On a flat plate, stir the eggs briefly with a fork.",
      "Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.",
      "Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.",
      "Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.",
      "Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.",
      "Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.",
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    "m8",
    ["c2", "c5", "c10"],
    "Salad with Smoked Salmon",
    "luxurious",
    "simple",
    "https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg",
    15,
    [
      {
        imageUrl: "https://png.pngtree.com/png-vector/20191025/ourlarge/pngtree-bread-icon-cartoon-style-png-image_1858025.jpg",
        name: "Arugula",
        quantity: "2 ổ",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-bacon-slice-icon-fresh-tasty-meat-cut-design-food-pork-vector-png-image_12641115.png",
        name: "Lamb's Lettuce",
        quantity: "150g",
      },
      {
        imageUrl: "https://png.pngtree.com/png-vector/20240730/ourlarge/pngtree-turmeric-spice-powder-with-green-leaves-isolated-on-transparent-background-ai-png-image_13294687.png",
        name: "Parsley",
        quantity: "30g",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230923/original/pngtree-leek-vegetable-icon-template-isolated-natural-lemongrass-vector-png-image_12833329.png",
        name: "Fennel",
        quantity: "2 cây",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Smoked Salmon",
        quantity: "200g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Mustard",
        quantity: "25g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Balsamic Vinegar",
        quantity: "10g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Olive Oil",
        quantity: "40ml",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Salt and Pepper",
        quantity: "5g",
      },
    ],
    [
      "Wash and cut salad and herbs",
      "Dice the salmon",
      "Process mustard, vinegar and olive oil into a dessing",
      "Prepare the salad",
      "Add salmon cubes and dressing",
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    "m9",
    ["c6", "c10"],
    "Delicious Orange Mousse",
    "affordable",
    "hard",
    "https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg",
    240,
    [
      {
        imageUrl: "https://png.pngtree.com/png-vector/20191025/ourlarge/pngtree-bread-icon-cartoon-style-png-image_1858025.jpg",
        name: "Sheets of Gelatine",
        quantity: "4 ổ",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-bacon-slice-icon-fresh-tasty-meat-cut-design-food-pork-vector-png-image_12641115.png",
        name: "Orange Juice",
        quantity: "150ml",
      },
      {
        imageUrl: "https://png.pngtree.com/png-vector/20240730/ourlarge/pngtree-turmeric-spice-powder-with-green-leaves-isolated-on-transparent-background-ai-png-image_13294687.png",
        name: "Sugar",
        quantity: "80g",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230923/original/pngtree-leek-vegetable-icon-template-isolated-natural-lemongrass-vector-png-image_12833329.png",
        name: "Yoghurt",
        quantity: "300g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Cream",
        quantity: "200g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Orange Peel",
        quantity: "25g",
      },
    ],
    [
      "Dissolve gelatine in pot",
      "Add orange juice and sugar",
      "Take pot off the stove",
      "Add 2 tablespoons of yoghurt",
      "Stir gelatin under remaining yoghurt",
      "Cool everything down in the refrigerator",
      "Whip the cream and lift it under die orange mass",
      "Cool down again for at least 4 hours",
      "Serve with orange peel",
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    "m10",
    ["c7"],
    "Pancakes",
    "affordable",
    "simple",
    "https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg",
    20,
    [
      {
        imageUrl: "https://png.pngtree.com/png-vector/20191025/ourlarge/pngtree-bread-icon-cartoon-style-png-image_1858025.jpg",
        name: "1/2 Cups all-purpose Flour",
        quantity: "1",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-bacon-slice-icon-fresh-tasty-meat-cut-design-food-pork-vector-png-image_12641115.png",
        name: "1/2 Teaspoons Baking Powder",
        quantity: "1",
      },
      {
        imageUrl: "https://png.pngtree.com/png-vector/20240730/ourlarge/pngtree-turmeric-spice-powder-with-green-leaves-isolated-on-transparent-background-ai-png-image_13294687.png",
        name: "Teaspoon Salt",
        quantity: "1",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230923/original/pngtree-leek-vegetable-icon-template-isolated-natural-lemongrass-vector-png-image_12833329.png",
        name: "Tablespoon White Sugar",
        quantity: "1",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "1/4 cups Milk",
        quantity: "1",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Egg",
        quantity: "1",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Tablespoons Butter, melted",
        quantity: "3",
      }
    ],
    [
      "In a large bowl, sift together the flour, baking powder, salt and sugar.",
      "Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.",
      "Heat a lightly oiled griddle or frying pan over medium high heat.",
      "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.",
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    "m11",
    ["c8"],
    "Creamy Indian Chicken Curry",
    "pricey",
    "challenging",
    "https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg",
    35,
    [
      {
        imageUrl: "https://png.pngtree.com/png-vector/20191025/ourlarge/pngtree-bread-icon-cartoon-style-png-image_1858025.jpg",
        name: "Chicken Breasts",
        quantity: "4",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230921/original/pngtree-bacon-slice-icon-fresh-tasty-meat-cut-design-food-pork-vector-png-image_12641115.png",
        name: "Onion",
        quantity: "1",
      },
      {
        imageUrl: "https://png.pngtree.com/png-vector/20240730/ourlarge/pngtree-turmeric-spice-powder-with-green-leaves-isolated-on-transparent-background-ai-png-image_13294687.png",
        name: "Cloves of Garlic",
        quantity: "2",
      },
      {
        imageUrl: "https://png.pngtree.com/png-clipart/20230923/original/pngtree-leek-vegetable-icon-template-isolated-natural-lemongrass-vector-png-image_12833329.png",
        name: "Piece of Ginger",
        quantity: "1",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Tablespoons Almonds",
        quantity: "4",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Teaspoon Cayenne Pepper",
        quantity: "1",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180129/byw/av2psqol7.webp",
        name: "Coconut Milk",
        quantity: "500ml",
      }
    ],
    [
      "Slice and fry the chicken breast",
      "Process onion, garlic and ginger into paste and sauté everything",
      "Add spices and stir fry",
      "Add chicken breast + 250ml of water and cook everything for 10 minutes",
      "Add coconut milk",
      "Serve with rice",
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    "m12",
    ["c9"],
    "Chocolate Souffle",
    "affordable",
    "hard",
    "https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg",
    45,
    [
      {
        imageUrl: "https://banner2.cleanpng.com/20240115/que/transparent-food-butter-wooden-cutting-board-realistic-butter-realistic-image-of-butter-slice-on-1710922435941.webp",
        name: "Teaspoon melted Butter",
        quantity: "1",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180424/hjq/aver0bqci.webp",
        name: "Tablespoons white Sugar",
        quantity: "2",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/lnd/20240809/sk/d345a9c0853ca29c74f53c8c5fc3f0.webp",
        name: "Ounces 70% dark Chocolate, broken into pieces",
        quantity: "2",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20240115/que/transparent-food-butter-wooden-cutting-board-realistic-butter-realistic-image-of-butter-slice-on-1710922435941.webp",
        name: "Tablespoon Butter",
        quantity: "1",
      },
      {
        imageUrl: "https://icon2.cleanpng.com/20180715/gwf/aav0kwtpv.webp",
        name: "Tablespoon all-purpose Flour",
        quantity: "1",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20231217/hgq/transparent-cartoon-milk-carton-red-and-white-checkered-patter-realistic-red-and-white-milk-carton-1710969307584.webp",
        name: "1/3 tablespoons cold Milk",
        quantity: "4",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20240304/xyg/transparent-salt-shaker-salt-plate-spoon-food-salt-on-plate-with-spoon-and-black-1710851518327.webp",
        name: "Pinch Salt",
        quantity: "1",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180702/zfg/kisspng-ingredient-black-pepper-coriander-peper-5b39ae829cf5b0.7482406815305068826429.jpg",
        name: "Pinch Cayenne Pepper",
        quantity: "1",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180226/hyw/av1g18nm8.webp",
        name: "Large Egg Yolk",
        quantity: "1",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20180226/hyw/av1g18nm8.webp",
        name: "Large Egg Whites",
        quantity: "2",
      },
      {
        imageUrl: "https://icon2.cleanpng.com/lnd/20240808/fv/5049bdae18e6267c5ade5c2f45d76b.webp",
        name: "Pinch Cream of Tartar",
        quantity: "1",
      },
    ],
    [
      "Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.",
      "Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.",
      "Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.",
      "Place chocolate pieces in a metal mixing bowl.",
      "Place bowl over a pan of about 3 cups hot water over low heat.",
      "Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.",
      "Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.",
      "Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.",
      "Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.",
      "Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.",
      "Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.",
      "whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.",
      "Transfer a little less than half of egg whites to chocolate.",
      "Mix until egg whites are thoroughly incorporated into the chocolate.",
      "Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.",
      "Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.",
      "Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.",
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    "m13",
    ["c2", "c5", "c10"],
    "Asparagus Salad with Cherry Tomatoes",
    "luxurious",
    "simple",
    "https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg",
    30,
    [
      {
        imageUrl: "https://banner2.cleanpng.com/lnd/20240604/ijh/ayth9eel6.webp",
        name: "White and Green Asparagus",
        quantity: "2 ổ",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20171128/d93/av2fnswpa.webp",
        name: "Pine Nuts",
        quantity: "30g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/20171128/d54/av2smnbil.webp",
        name: "Cherry Tomatoes",
        quantity: "300g",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/lnd/20240809/hc/76b7a2f3131640faf6fe3fc8b97b65.webp",
        name: "Salad",
        quantity: "2 cây",
      },
      {
        imageUrl: "https://banner2.cleanpng.com/lnd/20240718/uhw/a9n8cvr4s.webp",
        name: "Salt, Pepper and Olive Oil",
        quantity: "50g",
      },
    ],
    [
      "Wash, peel and cut the asparagus",
      "Cook in salted water",
      "Salt and pepper the asparagus",
      "Roast the pine nuts",
      "Halve the tomatoes",
      "Mix with asparagus, salad and dressing",
      "Serve with Baguette",
    ],
    true,
    true,
    true,
    true
  ),
];
