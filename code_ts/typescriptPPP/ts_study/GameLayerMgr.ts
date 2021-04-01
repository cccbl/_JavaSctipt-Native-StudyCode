


//沈聪的代码...


namespace ddz {
	/**
	 * 游戏层级管理
	 */
	export class GameLayerMgr extends SelfAdaptLayer {
		public mainUILayer: ExtendEUIGroup = new ExtendEUIGroup();
		public tableLayer: ExtendEUIGroup = new ExtendEUIGroup();
		//动画层
		public animationLayer: ExtendEUIGroup = new ExtendEUIGroup();
		//弹窗层
		public popLayer: ExtendEUIGroup = new ExtendEUIGroup();
		// 帽子层
		public hatLayer: HatLayer = new HatLayer();
		public static SelfData: { token: string, nickname: string, headImg: string, side: number } = { token: "", nickname: "", headImg: "", side: 0 };
		private static instance: GameLayerMgr;

		private constructor() {
			super();
			this.init();
		}

		public static gameLayer(): GameLayerMgr {
			if (!this.instance) {
				this.instance = new GameLayerMgr();
			}
			return this.instance;
		}

		//初始化各容器
		public init(): void {
			this.touchThrough = true;
			this.addChild(this.mainUILayer);
			this.mainUILayer.touchThrough = true;
			this.addChild(this.tableLayer);
			this.tableLayer.touchThrough = true;
			this.addChild(this.popLayer);
			this.popLayer.touchThrough = true;
			this.addChild(this.hatLayer);
			this.hatLayer.touchThrough = true;
			this.addChild(this.animationLayer);
			this.animationLayer.touchThrough = true;
		}

		public exitGame() {
			this.mainUILayer.visible = true;
		}

		public getGameMainUI(): GameMainUI {
			if (this.mainUILayer.numChildren > 0) {
				return this.mainUILayer.getElementAt(0) as GameMainUI;
			}
			return null;
		}
		public getTable(): DDZTable {
			if (this.tableLayer.numChildren > 0) {
				return this.tableLayer.getElementAt(0) as DDZTable;
			}
			return null;
		}

		public addTable(table: DDZTable) {
			this.tableLayer.addChild(table);

			if (this.tableLayer.numChildren > 1) {
				this.tableLayer.removeChildAt(0);
			}
		}

		public onDestory(): void {
			let gameMainUI: GameMainUI = this.getGameMainUI();
			if (gameMainUI) {
				gameMainUI.onDestroy();
			}

			GameLayerMgr.instance = null;
		}

		public static getWXAvatar(loginname: string, callback: (urlTexture: egret.Texture, nick: string) => void, defaultNick: string, defaultUrl: string): void {
            UserManager.GetInstance().getWXAvatar(loginname, (url: string, nick: string) => {
                let resultNick: string = nick;
                if (resultNick == "") {
                    resultNick = defaultNick;
                }
                if (url.indexOf(".jpg") > 0 || url.indexOf(".png") > 0) {
                    RES.getResByUrl(url, (event) => {
                        let texture: egret.Texture = <egret.Texture>event;
                        callback(texture, resultNick);
                    }, this, RES.ResourceItem.TYPE_IMAGE);
                } else {
                    callback(RES.getRes(defaultUrl), resultNick);
                }
            });
        }
	}
}