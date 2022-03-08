<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
    <view class="m-20">
      <button type="primary" @click="switchTo('/pages/index/tabbar1')">switchTab到tabbar1</button>
    </view>
		<view class="m-20">
			<button type="primary" @click="jumpTo('/pages/index/page1?a=1&b=1')">跳转到page1</button>
		</view>
		<view class="m-20">
			<button type="warn" @click="jumpTo('/pages/index/page2')">跳转到page2</button>
		</view>
		<view class="m-20">
			<button type="warn" @click="jumpTo('/pages/index/page3')">跳转到page3</button>
		</view>
		<view class="m-20">
			<button type="warn" @click="jumpTo('/pages/login')">登陆者进入</button>
		</view>
		<view class="m-20">
			<button type="primary" @click="login">登录</button>
		</view>
		<view class="m-20">
			<button type="warn" @click="logout">退出</button>
		</view>
		<view class="m-20">
			<button type="primary" @click="destroyInterceptLogin">销毁登录者拦截</button>
		</view>
		<view class="m-20">
			<button type="warn" @click="bindInterceptLogin">恢复登录拦截</button>
		</view>
	</view>
</template>

<script>
	import {bindInterceptLogin, destroyInterceptLogin} from '../../router/interceptLogin'
    import {bindInterceptEveryone, destroyInterceptEveryone} from '../../router/interceptEveryone'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			jumpTo (url) {
			    uni.navigateTo({
					url
				})
			},
      switchTo (url) {
        uni.switchTab({
          url
        })
      },
			login () {
                uni.setStorageSync('isLogin', 1);
			},
			logout () {
			    uni.removeStorageSync('isLogin')
			},
            destroyInterceptLogin () {
                // 销毁登录拦截
                destroyInterceptLogin()
                // 注册任何人可进入的拦截
                bindInterceptEveryone()
			},
            bindInterceptLogin () {
                // 销毁任何人可进入的拦截
			    destroyInterceptEveryone()
                // 注册登录拦截
                bindInterceptLogin()
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		/*margin: 200rpx auto 50rpx auto;*/
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.m-20{
		margin-top:30rpx;
	}
</style>
