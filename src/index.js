(function () {
    // 图片数据
    var img_data = [['../images/imgA_1.jpg', '../images/imgA_2.jpg', '../images/imgA_3.jpg'], ['../images/imgB_1.jpg', '../images/imgB_2.jpg', '../images/imgB_3.jpg'], ['../images/imgC_1.jpg', '../images/imgC_2.jpg', '../images/imgC_3.jpg']];
    // 获取元素
    var container_img = document.querySelector('.container-img'), container_fdj = document.querySelector('.container-fdj'), list_imgs = document.querySelector('.list-imgs'), mouse = document.querySelector('.mouse');
    // 记录当前li的class
    var li_class = null;
    // 程序主入口函数
    var init = function () {
        // 根据数据创建元素
        data_create_element();
        // 事件入口函数
        initEvent();
    }
    var data_create_element = function () {
        for (let i = 0; i < img_data.length; i++) {
            var li = document.createElement('li');
            li.style.backgroundImage = 'url(' + img_data[i][0] + ')';
            li.setAttribute('item', i);
            list_imgs.appendChild(li);
            // 初始化
            if (i === 0) {
                var item = li.getAttribute('item');
                li.setAttribute('class', 'click-li');
                container_img.style.backgroundImage = 'url(' + img_data[item][1] + ')';
                container_fdj.style.backgroundImage = 'url(' + img_data[item][2] + ')';
                li_class = li;
            }
            // 给li添加点击事件
            li.addEventListener('click', function () {
                var item = this.getAttribute('item');
                li_class.setAttribute('class', '');
                this.setAttribute('class', 'click-li');
                li_class = this;
                container_img.style.backgroundImage = 'url(' + img_data[item][1] + ')';
                container_fdj.style.backgroundImage = 'url(' + img_data[item][2] + ')';
            })
        }
    }
    var initEvent = function () {
        container_img.addEventListener('mousemove', container_img_mousemove);
        container_img.addEventListener('mouseleave', container_img_mouseleave);
    }
    var container_img_mousemove = function (e) {
        var x = e.clientX - container_img.getBoundingClientRect().x - mouse.offsetWidth / 2;
        var y = e.clientY - container_img.getBoundingClientRect().y - mouse.offsetHeight / 2;
        if (x <= 0) {
            x = 0;
        }
        if (y <= 0) {
            y = 0;
        }
        if (x >= container_img.offsetWidth - mouse.offsetWidth) {
            x = container_img.offsetWidth - mouse.offsetWidth;
        }
        if (y >= container_img.offsetHeight - mouse.offsetHeight) {
            y = container_img.offsetHeight - mouse.offsetHeight;
        }
        container_fdj.style.display = 'block';
        mouse.style.opacity = '1';
        container_fdj.style.backgroundPositionX = -x + 'px';
        container_fdj.style.backgroundPositionY = -y + 'px';
        mouse.style.left = x + 'px';
        mouse.style.top = y + 'px';
    }
    var container_img_mouseleave = function () {
        container_fdj.style.display = "none";
        mouse.style.opacity = '0';
    }
    init();
})()