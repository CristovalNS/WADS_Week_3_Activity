document.addEventListener('DOMContentLoaded', function() {
    var memberItems = document.querySelectorAll('.member-item');

    memberItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });
        item.addEventListener('mouseout', function() {
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
});