class homeCtl {
    index(ctx) {
        ctx.body = 'home';
    }
}

module.exports = new homeCtl();