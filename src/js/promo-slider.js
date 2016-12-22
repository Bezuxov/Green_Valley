$(function($contactTab) {
        if (!$contactTab.length) {
            return;
        }

        var $link = $contactTab;
        var $tab = $('.promo-img-slider');

        $link.on('click', function(e) {
            var $self = $(this);
            var index = $self.index();

            e.preventDefault();

            if (!$self.hasClass('is-active')) {
                $link.removeClass('is-active');
                $self.addClass('is-active');
            }
            $tab.hide();
            $tab.eq(index).show();
        });
    })($('tabs-slider__link'));
});
