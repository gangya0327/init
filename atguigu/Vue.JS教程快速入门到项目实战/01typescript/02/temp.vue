<template>
	<view class="feedback">
		<u-tabs :list="tabList" :is-scroll="false" :current="current" @change="change"></u-tabs>
		<view class="join">
			<view class="head">
				<u-image width="40rpx" height="40rpx" src="@/static/feedback/not-join.png">
					<u-loading slot="loading"></u-loading>
				</u-image>
				<text class="status">待参与</text>
				<text class="num">{{noJoinList.length}}</text>
			</view>
			<view class="join-list">
				<view class="join-item" v-for="item in noJoinList" :key="item.id" @click="goToDetail(item.id, 0)">
					<u-image width="88rpx" height="88rpx" :src="feedbackTypeIconArr[item.feedbackType - 1]">
						<u-loading slot="loading"></u-loading>
					</u-image>
					<view class="content">
						<view class="title">
							{{item.feedbackTitle}}
						</view>
						<view class="info-wrap">
							<text class="time">{{item.updateTime | timeFormat}}</text>
							<text class="type" :style="{color: feedbackTypeColorArr[item.feedbackType - 1]}">{{tabListObj[item.feedbackType-1].dictText}}</text>
						</view>
					</view>
					<view class="arrow">></view>
				</view>
			</view>
		</view>

		<view class="join">
			<view class="head">
				<u-image width="40rpx" height="40rpx" src="@/static/feedback/has-join.png">
					<u-loading slot="loading"></u-loading>
				</u-image>
				<text class="status">已参与</text>
				<text class="num">{{hasJoinList.length}}</text>
			</view>
			<view class="join-list">
				<view class="join-item" v-for="item in hasJoinList" :key="item.id" @click="goToDetail(item.id, 1)">
					<u-image width="88rpx" height="88rpx" :src="feedbackTypeIconArr[item.feedbackType - 1]">
						<u-loading slot="loading"></u-loading>
					</u-image>
					<view class="content">
						<view class="title">
							{{item.feedbackTitle}}
						</view>
						<view class="info-wrap">
							<text class="time">{{item.joinTime | timeFormat}}</text>
							<text class="type" :style="{color: feedbackTypeColorArr[item.feedbackType - 1]}">{{tabListObj[item.feedbackType-1].dictText}}</text>
						</view>
					</view>
					<view class="arrow">></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		imageBaseUrl,
		feedbackTypeColorArr,
		feedbackTypeIconArr
	} from "@/utils/constant.js"

	export default {
		data() {
			return {
				tabList: [{
					name: '全部公告'
				}, {
					name: '日常通知'
				}, {
					name: '活动告知'
				}, {
					name: '政策宣传'
				}, {
					name: '其他'
				}],
				current: 0,
				tabListObj: [],
				noJoinList: [],
				hasJoinList: [],
				imageBaseUrl: imageBaseUrl,
				feedbackTypeColorArr: feedbackTypeColorArr,
				feedbackTypeIconArr: feedbackTypeIconArr
			};
		},
		methods: {
			// 获取征集意见类型列表
			getAdviceTypeList() {
				this.$request({
					url: "/h5/feedback/adviceType"
				}).then(res => {
					this.tabListObj = res.data
					this.tabList = res.data
					const tabList = [{
						name: "全部"
					}]
					res.data.map(item => {
						tabList.push({
							name: item.dictText
						})
					})
					this.tabList = tabList
				})
			},
			// 获取征集意见查询列表
			getJoinList(adviceType) {
				let data = null
				if (adviceType) {
					data = {
						feedbackType: adviceType
					}
				}
				this.$request({
					url: "/h5/feedback/list",
					data: data
				}).then(res => {
					this.noJoinList = res.data.noJoin
					this.hasJoinList = res.data.hasJoin
					// console.log(this.noJoinList);
					// console.log(this.hasJoinList);
				})
			},
			// 跳转到详情页面
			goToDetail(id, flag) {
				uni.navigateTo({
					url: "../detail/detail?id=" + id + "&flag=" + flag
				})
			},
			change(index) {
				this.current = index;
				const adviceType = index ? this.tabListObj[index - 1].dictValue : ""
				this.getJoinList(adviceType)
			}
		},
		onLoad() {
			this.getAdviceTypeList()
			this.getJoinList()
		}
	}
</script>

<style lang="scss">
	.feedback {
		.join {
			background-color: #fff;
			padding: 0 32rpx;

			.head {
				display: flex;
				padding: 26rpx 0;
				border-bottom: 1px solid #E5E5E5;

				.status {
					padding-left: 16rpx;
					flex: 1;
				}
			}

			.join-list {
				margin-bottom: 16rpx;

				.join-item {
					display: flex;
					padding: 30rpx 0;
					align-items: center;

					.content {
						flex: 1;
						padding-left: 32rpx;
						padding-right: 50rpx;

						.title {
							font-size: 28rpx;
							word-break: break-all;
						}

						.info-wrap {
							.time {
								color: #A9AFB8;
								font-size: 24rpx;
							}

							.type {
								font-size: 26rpx;
								padding-left: 20rpx;
							}
						}
					}

					.arrow {
						color: #C7C7CC;
					}
				}
			}
		}
	}
</style>
