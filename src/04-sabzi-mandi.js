/**
 * 🥬 Sabzi Mandi Shopping Cart - Array Basics
 *
 * Amma sabzi mandi gayi hain. Unka shopping cart (array) hai.
 * Items add karna, remove karna, check karna — sab array basic methods se.
 * Tu Amma ka digital thela bana!
 *
 * Methods to explore: .push(), .pop(), .unshift(), .indexOf(),
 *   .includes(), .length, .concat(), Array.isArray()
 *
 * Functions:
 *
 *   1. addToCart(cart, item)
 *      - .push() se item ko cart ke end mein add karo
 *      - Return: new cart length (push returns this automatically)
 *      - Agar cart Array nahi hai (Array.isArray use karo), return -1
 *      - Agar item empty string hai ya string nahi hai, return cart.length without adding
 *      - Example: addToCart(["tamatar", "pyaaz"], "mirchi") => 3
 *
 *   2. addUrgentItem(cart, item)
 *      - .unshift() se item ko cart ke BEGINNING mein add karo (pehle khareedna hai!)
 *      - Return: updated cart array
 *      - Agar cart not array, return []
 *      - Agar item valid string nahi hai, return cart unchanged
 *      - Example: addUrgentItem(["pyaaz", "mirchi"], "dhaniya") => ["dhaniya", "pyaaz", "mirchi"]
 *
 *   3. removeLastItem(cart)
 *      - .pop() se last sabzi remove karo
 *      - Return: the removed item
 *      - Agar cart not array ya empty hai, return undefined
 *      - Example: removeLastItem(["tamatar", "pyaaz", "mirchi"]) => "mirchi"
 *
 *   4. isInCart(cart, item)
 *      - .includes() se check karo ki item cart mein hai ya nahi
 *      - Agar cart not array, return false
 *      - Example: isInCart(["tamatar", "pyaaz"], "pyaaz") => true
 *      - Example: isInCart(["tamatar", "pyaaz"], "mirchi") => false
 *
 *   5. mergeCarts(cart1, cart2)
 *      - .concat() se do carts ko combine karo
 *      - Return: new merged array
 *      - Agar koi bhi array nahi hai, usse empty array [] maan lo
 *      - Example: mergeCarts(["tamatar"], ["mirchi", "adrak"]) => ["tamatar", "mirchi", "adrak"]
 *
 * @example
 *   addToCart(["tamatar", "pyaaz"], "mirchi")        // => 3
 *   addUrgentItem(["pyaaz"], "dhaniya")              // => ["dhaniya", "pyaaz"]
 *   removeLastItem(["tamatar", "pyaaz", "mirchi"])   // => "mirchi"
 */

export function addToCart(cart, item) {
    // 1. Agar cart array NAHI hai, toh return -1
    if (!Array.isArray(cart)) return -1;

    // 2. Item validate karo (must be non-empty string)
    if (typeof item !== "string" || item === "") return cart.length;

    // 3. .push() item ko end mein daalta hai aur NEW length return karta hai
    return cart.push(item);
}

export function addUrgentItem(cart, item) {
    // 1. Invalid cart ke liye empty array return karo
    if (!Array.isArray(cart)) return [];

    // 2. Invalid item ke liye cart unchanged return karo
    if (typeof item !== "string" || item === "") return cart;

    // 3. .unshift() item ko START mein daalta hai
    cart.unshift(item);
    return cart;
}

export function removeLastItem(cart) {
    // 1. Check if it's an array AND not empty
    if (!Array.isArray(cart) || cart.length === 0) return undefined;

    // 2. .pop() removes and returns the last element
    return cart.pop();
}

export function isInCart(cart, item) {
    // 1. Agar array nahi hai, toh item hone ka sawal hi nahi (return false)
    if (!Array.isArray(cart)) return false;

    // 2. .includes() returns true/false based on existence
    return cart.includes(item);
}

export function mergeCarts(cart1, cart2) {
    // 1. Dono ko array ki tarah treat karo, nahi toh empty array use karo
    const safeCart1 = Array.isArray(cart1) ? cart1 : [];
    const safeCart2 = Array.isArray(cart2) ? cart2 : [];

    // 2. .concat() dono ko jod kar ek NAYA array deta hai
    return safeCart1.concat(safeCart2);
}