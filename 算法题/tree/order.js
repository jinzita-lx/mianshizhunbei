function preOrder(tree) {
    if(tree) {
        console.log(tree.value);
        preOrder(tree.left);
        preOrder(tree.right);
    }
}