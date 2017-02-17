# This dockerfile uses the centos image
# VERSION 2 - EDITION 1
# Author: chenyongbing
# Cretae Time : 2016-09-14 下午4:41
# Command format: Instruction [arguments / command] ..
# Base image to use, this must be set as the first line

#FROM <image>  or FROM <image>:<tag>
# Maintainer: docker_user <docker_user at email.com> (@docker_user)

# Commands to update the image
# RUN <command> or  RUN ["exec" , "param1" , "param2"]
# RUN apt-get install vim -y or RUN ["apt-get" ,"install","vim","-y"]

# ENTRYPOINT命令设置在容器启动时执行命令，如果有多个ENTRYPOINT指令，那只有最后一个生效

# CMD 一个Dockerfile里只能有一个CMD，如果有多个，只有最后一个生效

# EXPOSE指令告诉容器在运行时要监听的端口，但是这个端口是用于多个容器之间通信用的（links），外面的host是访问不到的
# EXPOSE <port1> <port2>

# ADD 将文件<src>拷贝到container的文件系统对应的路径<dest>下 ; <src>必须是在Dockerfile的相对路径下
# ADD还支持自动解压tar文件
# ADD <src> <dest>

# COPY 文件拷贝，不支持解压
# COPY <src> <dest>

# ENV <key> <value>   设置环境变量

# VOLUME 用来在容器中设置一个挂载点

# WORKDIR指令用于设置Dockerfile中的RUN、CMD和ENTRYPOINT指令执行命令的工作目录(默认为/目录)
# WORKDIR <dir>


# USER 为运行镜像时或者任何接下来的RUN指令指定运行用户名或UID
# USER <username>

FROM kssz/nginx
MAINTAINER chenyongbing
ARG KS_PROJECT_NAME
ENV KS_PROJECT_NAME $KS_PROJECT_NAME
ENV KS_PROJECT_PORT 80
EXPOSE $KS_PROJECT_PORT
COPY ./dist/ /usr/share/nginx/html/dist
COPY index.html /usr/share/nginx/html/