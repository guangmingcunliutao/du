var add_sub = (function () {
    return {
        init: function () {
            this.pro_item_wrap = $('.pro_item_wrap');
            this.event();
        },
        event: function () {
            var _this = this;
            this.pro_item_wrap.on('click', '.num_sub', this.num_subClickHand);
            this.pro_item_wrap.on('click', '.num_add', this.num_addClickHand);
        },
        num_subClickHand: function () {
            var count = $(this).siblings('.countInp').val();
            // 数量最小为1
            if (count <= 1) {
                this.disabled = 'disabled';
                $(this).siblings('.sub_tip').finish().fadeIn().delay(1000).fadeOut();
            } else {
                count--;
                $(this).siblings('.countInp').val(count);
            }
        },
        // 数量最大为10
        num_addClickHand: function () {
            var count = $(this).siblings('.countInp').val();
            if (count >= 10) {
                this.disabled = 'disabled';
                $(this).siblings('.add_tip').finish().fadeIn().delay(1000).fadeOut();
            } else {
                count++;
                $(this).siblings('.countInp').val(count);
            }
        }
    }
}());