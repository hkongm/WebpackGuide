// 包入CSS文件，把loader处理顺序在这里写，命令行就不用指定loader了
require('!style!css!sass!./style.scss');

document.writeln('本页启用了sass loader');
