
function completeBinaryTree(a) {
    const out = [];
    let i = 0;
    const inorder = n => {
        if(n >= a.length) return;
        inorder(n*2+1);
        out[n]=a[i++];
        inorder(n*2+2);
    }
    inorder(0);
    return out;
}

const result = completeBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(result)
