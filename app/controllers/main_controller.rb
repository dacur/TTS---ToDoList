class MainController < ApplicationController
	def index
		begin
			@lists = List.all

			@items = Hash.new

			@lists.each do |joe|
				x = ListItem.where('list_id = ' + joe.id.to_s).to_a
				
				@items[joe.id] = x
			end

		rescue => e
			HandleError(e)
		end
	end

	def savelist
		begin
			list_name = params[:server_list_name]

			new_list = List.new(name: list_name)

			if (!new_list.valid?())
				return
			end

			l = new_list.save
			
			render json:l
		rescue => e
			HandleError(e)
		end
	end

	def savenewitem
		begin
			item_text = params[:server_data]
			list_id = params[:listID]

			# VALIDATION 

			#http://apidock.com/rails/ActiveRecord/Base/create/class
			new_item = ListItem.create(:list_id => list_id, :text => item_text)

			render json:new_item
		rescue => e
			HandleError(e)
		end
	end
end
